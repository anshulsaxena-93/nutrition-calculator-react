import { useState } from "react";

function computeTotals(recipe) {
  let cal = 0, pro = 0, carb = 0, fat = 0, fib = 0;
  recipe.forEach(entry => {
    const f = entry.grams / 100;
    cal  += entry.ingredient.cal  * f;
    pro  += entry.ingredient.pro  * f;
    carb += entry.ingredient.carb * f;
    fat  += entry.ingredient.fat  * f;
    fib  += entry.ingredient.fib  * f;
  });
  return { cal, pro, carb, fat, fib };
}

export default function NutritionSummary({ recipe, onClear, recipeName }) {
  const [servings, setServings] = useState(1);

  if (recipe.length === 0) return null;

  const t = computeTotals(recipe);
  const s = Math.max(1, servings);
  const macroKcal = t.pro * 4 + t.carb * 4 + t.fat * 9;
  const pPro  = macroKcal > 0 ? (t.pro * 4  / macroKcal * 100).toFixed(1) : 0;
  const pCarb = macroKcal > 0 ? (t.carb * 4 / macroKcal * 100).toFixed(1) : 0;
  const pFat  = macroKcal > 0 ? (t.fat * 9  / macroKcal * 100).toFixed(1) : 0;

  function handlePrint() {
    if (recipeName) document.title = recipeName + " – Nutrition";
    window.print();
  }

  function handleClear() {
    if (recipe.length > 0 && !confirm("Clear all ingredients?")) return;
    onClear();
  }

  return (
    <section className="card summary-card" id="summary-section">
      <h2 className="section-title">Nutrition Summary</h2>

      <div className="servings-row">
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          id="servings"
          min="1"
          step="1"
          value={servings}
          onChange={e => setServings(parseInt(e.target.value) || 1)}
        />
        <span className="hint">(divide totals by number of servings)</span>
      </div>

      <div className="summary-grid">
        {[
          { label: "Calories", cls: "calories", val: Math.round(t.cal),         per: Math.round(t.cal / s),         unit: "" },
          { label: "Protein",  cls: "protein",  val: t.pro.toFixed(1) + "g",    per: (t.pro / s).toFixed(1) + "g",  unit: "g" },
          { label: "Carbs",    cls: "carbs",    val: t.carb.toFixed(1) + "g",   per: (t.carb / s).toFixed(1) + "g", unit: "g" },
          { label: "Fat",      cls: "fat",      val: t.fat.toFixed(1) + "g",    per: (t.fat / s).toFixed(1) + "g",  unit: "g" },
          { label: "Fiber",    cls: "fiber",    val: t.fib.toFixed(1) + "g",    per: (t.fib / s).toFixed(1) + "g",  unit: "g" },
        ].map(({ label, cls, val, per }) => (
          <div key={label} className={`summary-block ${cls}`}>
            <span className="summary-value">{val}</span>
            <span className="summary-label">{label}</span>
            {s > 1 && <span className="summary-sub">{per} / serving</span>}
          </div>
        ))}
      </div>

      <div className="macro-bar-section">
        <h3>Macro Breakdown</h3>
        <div className="macro-bar">
          <div className="bar-protein" style={{ width: pPro + "%" }} />
          <div className="bar-carbs"   style={{ width: pCarb + "%" }} />
          <div className="bar-fat"     style={{ width: pFat + "%" }} />
        </div>
        <div className="macro-legend">
          <span className="legend-dot protein-dot" /> Protein <span>{pPro}%</span>
          &nbsp;&nbsp;
          <span className="legend-dot carbs-dot" /> Carbs <span>{pCarb}%</span>
          &nbsp;&nbsp;
          <span className="legend-dot fat-dot" /> Fat <span>{pFat}%</span>
        </div>
      </div>

      <div className="action-row">
        <button className="btn-secondary" onClick={handleClear}>Clear Recipe</button>
        <button className="btn-primary"   onClick={handlePrint}>Print / Save PDF</button>
      </div>
    </section>
  );
}
