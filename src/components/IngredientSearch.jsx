import { useState, useRef, useEffect, useCallback } from "react";
import { NUTRITION_DB, UNIT_CONVERSIONS, searchUSDA } from "../data/nutritionDb";

export default function IngredientSearch({ apiKey, onApiError, onAdd }) {
  const [query, setQuery]               = useState("");
  const [suggestions, setSuggestions]   = useState([]);
  const [selected, setSelected]         = useState(null);
  const [activeIdx, setActiveIdx]       = useState(-1);
  const [qty, setQty]                   = useState("100");
  const [unit, setUnit]                 = useState("g");
  const [hint, setHint]                 = useState({ msg: "", type: "" });
  const [usdaResults, setUsdaResults]   = useState([]);
  const debounceRef = useRef(null);

  const getLocalMatches = useCallback((q) =>
    NUTRITION_DB.filter(i => i.name.toLowerCase().includes(q.toLowerCase())).slice(0, 5),
  []);

  function handleQueryChange(e) {
    const q = e.target.value;
    setQuery(q);
    setSelected(null);
    setActiveIdx(-1);

    if (!q.trim()) { setSuggestions([]); clearTimeout(debounceRef.current); return; }

    setSuggestions(getLocalMatches(q));

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      if (!apiKey) return;
      try {
        const usda = await searchUSDA(q.trim(), apiKey);
        setUsdaResults(usda);
        setSuggestions([...getLocalMatches(q), ...usda.slice(0, 7)]);
      } catch (err) {
        if (err.message === "invalid_key") onApiError("Invalid API key — check settings.");
      }
    }, 400);
  }

  function pickIngredient(item) {
    setSelected(item);
    setQuery(item.name);
    setSuggestions([]);
    setHint({ msg: "", type: "" });
  }

  function handleKeyDown(e) {
    if (!suggestions.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx(i => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx(i => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIdx >= 0) {
        pickIngredient(suggestions[activeIdx]);
      } else {
        handleAdd();
      }
    } else if (e.key === "Escape") {
      setSuggestions([]);
    }
  }

  function handleAdd() {
    if (!selected) {
      setHint({ msg: "Please select an ingredient from the list.", type: "error" });
      return;
    }
    const amount = parseFloat(qty);
    if (isNaN(amount) || amount <= 0) {
      setHint({ msg: "Please enter a valid amount.", type: "error" });
      return;
    }
    const grams = unit === "piece"
      ? amount * (selected.perPiece || 100)
      : amount * UNIT_CONVERSIONS[unit];

    onAdd({ ingredient: selected, grams, qty: amount, unit });

    setQuery("");
    setSelected(null);
    setQty("100");
    setUnit("g");
    setHint({ msg: "", type: "" });
    setSuggestions([]);
  }

  // close suggestions on outside click
  const wrapRef = useRef(null);
  useEffect(() => {
    function handler(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setSuggestions([]);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section className="card">
      <h2 className="section-title">Add Ingredient</h2>
      <div className="add-ingredient-row">
        <div className="search-wrapper" ref={wrapRef}>
          <input
            type="text"
            id="ingredient-search"
            placeholder="Search ingredient (e.g. chicken, rice, egg…)"
            autoComplete="off"
            value={query}
            onChange={handleQueryChange}
            onKeyDown={handleKeyDown}
          />
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((item, i) => (
                <li
                  key={item.source === "usda" ? `usda-${item.name}` : item.name}
                  className={i === activeIdx ? "active" : ""}
                  onMouseDown={() => pickIngredient(item)}
                >
                  {item.name}{" "}
                  <span className={`cat${item.source === "usda" ? " usda-badge" : ""}`}>
                    {item.source === "usda" ? "USDA" : item.cat}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="qty-unit-wrapper">
          <input
            type="number"
            id="qty"
            placeholder="Amount"
            min="0.1"
            step="0.1"
            value={qty}
            onChange={e => setQty(e.target.value)}
          />
          <select id="unit" value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="g">g</option>
            <option value="oz">oz</option>
            <option value="ml">ml</option>
            <option value="cup">cup</option>
            <option value="tbsp">tbsp</option>
            <option value="tsp">tsp</option>
            <option value="piece">piece</option>
          </select>
        </div>

        <button className="btn-primary" onClick={handleAdd}>+ Add</button>
      </div>
      {hint.msg && <p className={`hint${hint.type === "error" ? " error" : ""}`}>{hint.msg}</p>}
    </section>
  );
}
