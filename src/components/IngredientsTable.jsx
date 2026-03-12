export default function IngredientsTable({ recipe, onRemove }) {
  if (recipe.length === 0) return null;

  return (
    <section className="card" id="ingredients-section">
      <h2 className="section-title">Ingredients</h2>
      <div className="table-wrapper">
        <table id="ingredients-table">
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Amount</th>
              <th>Calories</th>
              <th>Protein</th>
              <th>Carbs</th>
              <th>Fat</th>
              <th>Fiber</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipe.map((entry, idx) => {
              const f    = entry.grams / 100;
              const cal  = entry.ingredient.cal  * f;
              const pro  = entry.ingredient.pro  * f;
              const carb = entry.ingredient.carb * f;
              const fat  = entry.ingredient.fat  * f;
              const fib  = entry.ingredient.fib  * f;
              return (
                <tr key={idx}>
                  <td>
                    <div className="ingredient-name">{entry.ingredient.name}</div>
                    <div className="ingredient-qty">
                      {entry.qty} {entry.unit} ({entry.grams.toFixed(0)}g)
                    </div>
                  </td>
                  <td>{entry.grams.toFixed(0)}g</td>
                  <td>{cal.toFixed(0)}</td>
                  <td>{pro.toFixed(1)}g</td>
                  <td>{carb.toFixed(1)}g</td>
                  <td>{fat.toFixed(1)}g</td>
                  <td>{fib.toFixed(1)}g</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => onRemove(idx)}
                      title="Remove"
                    >✕</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
