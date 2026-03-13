import { useState } from "react";

function computeTotals(recipe) {
  const t = { cal: 0, pro: 0, carb: 0, fat: 0, fib: 0, satFat: 0, transFat: 0, chol: 0, sodium: 0, sugar: 0, addedSugar: 0 };
  recipe.forEach(entry => {
    const f = entry.grams / 100;
    const n = entry.ingredient;
    t.cal       += n.cal       * f;
    t.pro       += n.pro       * f;
    t.carb      += n.carb      * f;
    t.fat       += n.fat       * f;
    t.fib       += n.fib       * f;
    t.satFat    += (n.satFat    ?? 0) * f;
    t.transFat  += (n.transFat  ?? 0) * f;
    t.chol      += (n.chol      ?? 0) * f;
    t.sodium    += (n.sodium    ?? 0) * f;
    t.sugar     += (n.sugar     ?? 0) * f;
    t.addedSugar+= (n.addedSugar?? 0) * f;
  });
  return t;
}

function NutRow({ label, value, unit = "g", indent = false, bold = false, large = false }) {
  return (
    <div className={`nf-row${indent ? " nf-indent" : ""}${bold ? " nf-bold" : ""}${large ? " nf-large" : ""}`}>
      <span className="nf-label">{label}</span>
      <span className="nf-value">{value}{unit}</span>
    </div>
  );
}

export default function NutritionSummary({ recipe, onClear, recipeName }) {
  const [servings, setServings] = useState(1);

  if (recipe.length === 0) return null;

  const t = computeTotals(recipe);
  const s = Math.max(1, servings);

  const per = (v, decimals = 1) => (v / s).toFixed(decimals);
  const perInt = (v) => Math.round(v / s);

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
        {/* ── Nutrition Facts Panel ── */}
        <div className="nf-panel">
          <div className="nf-header">
            <div className="nf-title">Nutrition Facts</div>
            {s > 1 && <div className="nf-servings">{s} servings per recipe</div>}
          </div>

          <div className="nf-calories-row">
            <span>Calories</span>
            <span className="nf-cal-value">{perInt(t.cal)}</span>
          </div>

          <div className="nf-divider-thick" />

          <div className="nf-dv-header">% Daily Value*</div>

          <NutRow label="Total Fat"        value={per(t.fat)}     bold />
          <NutRow label="Saturated Fat"    value={per(t.satFat)}  indent />
          <NutRow label="Trans Fat"        value={per(t.transFat, 2)} indent />
          <NutRow label="Cholesterol"      value={perInt(t.chol)} unit="mg" bold />
          <NutRow label="Sodium"           value={perInt(t.sodium)} unit="mg" bold />
          <NutRow label="Total Carbohydrate" value={per(t.carb)} bold />
          <NutRow label="Dietary Fiber"    value={per(t.fib)}     indent />
          <NutRow label="Total Sugars"     value={per(t.sugar)}   indent />
          <NutRow label="Added Sugars"     value={per(t.addedSugar)} indent />
          <NutRow label="Protein"          value={per(t.pro)}     bold />
        </div>

        {/* ── Macro Bar ── */}
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
              { label: "Calories",  val: perInt(t.cal),        unit: "kcal", cls: "calories" },
              { label: "Protein",   val: per(t.pro),           unit: "g",    cls: "protein"  },
              { label: "Carbs",     val: per(t.carb),          unit: "g",    cls: "carbs"    },
              { label: "Fat",       val: per(t.fat),           unit: "g",    cls: "fat"      },
              { label: "Fiber",     val: per(t.fib),           unit: "g",    cls: "fiber"    },
              { label: "Sodium",    val: perInt(t.sodium),     unit: "mg",   cls: "sodium"   },
              { label: "Sugar",     val: per(t.sugar),         unit: "g",    cls: "sugar"    },
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
