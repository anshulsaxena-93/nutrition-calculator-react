import { useState } from "react";
import ApiKeyModal      from "./components/ApiKeyModal";
import IngredientSearch from "./components/IngredientSearch";
import IngredientsTable from "./components/IngredientsTable";
import NutritionSummary from "./components/NutritionSummary";

export default function App() {
  const [recipe, setRecipe]             = useState([]);
  const [recipeName, setRecipeName]     = useState("");
  const [apiKey, setApiKey]             = useState(() => localStorage.getItem("usda_api_key") || "");
  const [apiModalOpen, setApiModalOpen] = useState(false);
  const [apiStatus, setApiStatus]       = useState(
    () => localStorage.getItem("usda_api_key") ? "connected" : "missing"
  );

  function saveApiKey(key) {
    setApiKey(key);
    if (key) {
      localStorage.setItem("usda_api_key", key);
      setApiStatus("connected");
    } else {
      localStorage.removeItem("usda_api_key");
      setApiStatus("missing");
    }
  }

  function handleApiError(msg) {
    setApiStatus("error:" + msg);
  }

  const statusText = apiStatus === "connected"
    ? "USDA API connected"
    : apiStatus.startsWith("error:")
    ? apiStatus.slice(6)
    : "No USDA API key — using local database only. Click ⚙ to add key.";

  const statusClass = apiStatus === "connected" ? "ok"
    : apiStatus.startsWith("error:") ? "error"
    : "warn";

  return (
    <>
      <ApiKeyModal
        isOpen={apiModalOpen}
        currentKey={apiKey}
        onSave={saveApiKey}
        onClose={() => setApiModalOpen(false)}
      />

      <div className="app">
        <header>
          <div className="header-top">
            <div>
              <h1>Recipe Nutrition Calculator</h1>
              <p className="subtitle">Build your recipe and track its nutritional value</p>
            </div>
            <button
              className="settings-btn"
              title="USDA API settings"
              onClick={() => setApiModalOpen(true)}
            >&#9881;</button>
          </div>
          <div className={`api-status ${statusClass}`}>{statusText}</div>
        </header>

        <main>
          <section className="card">
            <label htmlFor="recipe-name" className="section-title">Recipe Name</label>
            <input
              type="text"
              id="recipe-name"
              placeholder="e.g. Chicken Salad"
              className="recipe-name-input"
              value={recipeName}
              onChange={e => setRecipeName(e.target.value)}
            />
          </section>

          <IngredientSearch
            apiKey={apiKey}
            onApiError={handleApiError}
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
          <p>Local values approximate (per 100g). USDA data from FoodData Central — Foundation &amp; SR Legacy foods.</p>
        </footer>
      </div>
    </>
  );
}
