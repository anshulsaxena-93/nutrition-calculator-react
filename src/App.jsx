import { useState } from "react";
import IngredientSearch from "./components/IngredientSearch";
import IngredientsTable from "./components/IngredientsTable";
import NutritionSummary from "./components/NutritionSummary";

export default function App() {
  const [recipe, setRecipe]         = useState([]);
  const [recipeName, setRecipeName] = useState("");

  return (
    <>
      <div className="app">
        <header>
          <div className="header-top">
            <div>
              <h1>Recipe Nutrition Calculator</h1>
              <p className="subtitle">Build your recipe and track its nutritional value</p>
            </div>
          </div>
        </header>

        <main>
          <section className="card">
            <label htmlFor="recipe-name" className="section-title">Recipe Name</label>
            <input
              type="text"
              id="recipe-name"
              placeholder="e.g. Palak Crunch"
              className="recipe-name-input"
              value={recipeName}
              onChange={e => setRecipeName(e.target.value)}
            />
          </section>

          <IngredientSearch
            onAdd={entry => setRecipe(r => [...r, entry])}
          />

          <IngredientsTable
            recipe={recipe}
            onRemove={idx => setRecipe(r => r.filter((_, i) => i !== idx))}
          />

          <NutritionSummary
            recipe={recipe}
            recipeName={recipeName}
            onClear={() => setRecipe([])}
          />
        </main>

        <footer>
          <p>Nutritional values are approximate (per 100g).</p>
        </footer>
      </div>
    </>
  );
}
