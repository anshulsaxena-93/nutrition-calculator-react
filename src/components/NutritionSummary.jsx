import { useState } from "react";

// % Daily Value reference amounts (FDA 2020 values)
const DV = { fat: 78, satFat: 20, chol: 300, sodium: 2300, carb: 275, fib: 28, addedSugar: 50 };
const dv = (v, ref) => ref ? Math.round(v / ref * 100) : null;

function computeTotals(recipe) {
  const t = { cal: 0, pro: 0, carb: 0, fat: 0, fib: 0, satFat: 0, transFat: 0, chol: 0, sodium: 0, sugar: 0, addedSugar: 0, grams: 0 };
  recipe.forEach(entry => {
    const f = entry.grams / 100;
    const n = entry.ingredient;
    t.cal        += n.cal        * f;
    t.pro        += n.pro        * f;
    t.carb       += n.carb       * f;
    t.fat        += n.fat        * f;
    t.fib        += n.fib        * f;
    t.satFat     += (n.satFat     ?? 0) * f;
    t.transFat   += (n.transFat   ?? 0) * f;
    t.chol       += (n.chol       ?? 0) * f;
    t.sodium     += (n.sodium     ?? 0) * f;
    t.sugar      += (n.sugar      ?? 0) * f;
    t.addedSugar += (n.addedSugar ?? 0) * f;
    t.grams      += entry.grams;
  });
  return t;
}

export default function NutritionSummary({ recipe, onClear, recipeName }) {
  const [servings, setServings] = useState(1);

  if (recipe.length === 0) return null;

  const t = computeTotals(recipe);
  const s = Math.max(1, servings);

  const p  = (v, d = 1) => (v / s).toFixed(d);
  const pi = (v)        => Math.round(v / s);
  const pdv = (v, ref)  => { const pct = dv(v / s, ref); return pct !== null ? pct + "%" : ""; };

  const servingGrams = Math.round(t.grams / s);

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

      <div className="summary-layout">

        {/* ── FDA-style Nutrition Facts Panel ── */}
        <div className="nf-panel">
          <div className="nf-title-block">
            <div className="nf-title">Nutrition Facts</div>
          </div>

          <div className="nf-serving-info">
            {s > 1 && <div className="nf-servings-count">{s} servings per recipe</div>}
            <div className="nf-serving-size-row">
              <span className="nf-serving-label">Serving size</span>
              <span className="nf-serving-val">{servingGrams}g</span>
            </div>
          </div>

          <div className="nf-thick-divider" />

          <div className="nf-amount-label">Amount Per Serving</div>

          <div className="nf-calories-block">
            <span className="nf-cal-label">Calories</span>
            <span className="nf-cal-num">{pi(t.cal)}</span>
          </div>

          <div className="nf-medium-divider" />
          <div className="nf-dv-header">% Daily Value*</div>

          {/* Total Fat */}
          <div className="nf-row nf-bold">
            <span>Total Fat <span className="nf-val-inline">{p(t.fat)}g</span></span>
            <span>{pdv(t.fat, DV.fat)}</span>
          </div>
          <div className="nf-row nf-indent1">
            <span>Saturated Fat <span className="nf-val-inline">{p(t.satFat)}g</span></span>
            <span>{pdv(t.satFat, DV.satFat)}</span>
          </div>
          <div className="nf-row nf-indent1">
            <span><em>Trans</em> Fat <span className="nf-val-inline">{p(t.transFat, 2)}g</span></span>
            <span></span>
          </div>

          {/* Cholesterol */}
          <div className="nf-row nf-bold">
            <span>Cholesterol <span className="nf-val-inline">{pi(t.chol)}mg</span></span>
            <span>{pdv(t.chol, DV.chol)}</span>
          </div>

          {/* Sodium */}
          <div className="nf-row nf-bold">
            <span>Sodium <span className="nf-val-inline">{pi(t.sodium)}mg</span></span>
            <span>{pdv(t.sodium, DV.sodium)}</span>
          </div>

          {/* Total Carbohydrate */}
          <div className="nf-row nf-bold">
            <span>Total Carbohydrate <span className="nf-val-inline">{p(t.carb)}g</span></span>
            <span>{pdv(t.carb, DV.carb)}</span>
          </div>
          <div className="nf-row nf-indent1">
            <span>Dietary Fiber <span className="nf-val-inline">{p(t.fib)}g</span></span>
            <span>{pdv(t.fib, DV.fib)}</span>
          </div>
          <div className="nf-row nf-indent1">
            <span>Total Sugars <span className="nf-val-inline">{p(t.sugar)}g</span></span>
            <span></span>
          </div>
          <div className="nf-row nf-indent2">
            <span>Includes {p(t.addedSugar)}g Added Sugars</span>
            <span>{pdv(t.addedSugar, DV.addedSugar)}</span>
          </div>

          {/* Protein */}
          <div className="nf-row nf-bold nf-protein-row">
            <span>Protein <span className="nf-val-inline">{p(t.pro)}g</span></span>
            <span></span>
          </div>

          <div className="nf-footnote">
            * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
          </div>
        </div>

        {/* ── Macro Bar + Quick Stats ── */}
        <div className="summary-right">
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

          <div className="quick-stats">
            {[
              { label: "Calories",   val: pi(t.cal),      unit: "kcal", cls: "calories" },
              { label: "Protein",    val: p(t.pro),        unit: "g",    cls: "protein"  },
              { label: "Carbs",      val: p(t.carb),       unit: "g",    cls: "carbs"    },
              { label: "Fat",        val: p(t.fat),        unit: "g",    cls: "fat"      },
              { label: "Fiber",      val: p(t.fib),        unit: "g",    cls: "fiber"    },
              { label: "Sodium",     val: pi(t.sodium),    unit: "mg",   cls: "sodium"   },
              { label: "Sugar",      val: p(t.sugar),      unit: "g",    cls: "sugar"    },
            ].map(({ label, val, unit, cls }) => (
              <div key={label} className={`qs-block ${cls}`}>
                <span className="qs-value">{val}</span>
                <span className="qs-unit">{unit}</span>
                <span className="qs-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="action-row">
        <button className="btn-secondary" onClick={handleClear}>Clear Recipe</button>
        <button className="btn-primary"   onClick={handlePrint}>Print / Save PDF</button>
      </div>
    </section>
  );
}
