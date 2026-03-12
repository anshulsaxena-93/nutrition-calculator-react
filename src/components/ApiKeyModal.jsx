import { useState, useEffect } from "react";

export default function ApiKeyModal({ isOpen, currentKey, onSave, onClose }) {
  const [value, setValue] = useState(currentKey);

  useEffect(() => {
    if (isOpen) setValue(currentKey);
  }, [isOpen, currentKey]);

  if (!isOpen) return null;

  function handleSave() {
    onSave(value.trim());
    onClose();
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box">
        <h3>USDA FoodData Central API Key</h3>
        <p>
          Enter your API key to search the full USDA food database.<br />
          Get a free key at{" "}
          <a href="https://fdc.nal.usda.gov/api-guide.html" target="_blank" rel="noreferrer">
            fdc.nal.usda.gov
          </a>
        </p>
        <input
          type="text"
          placeholder="Paste your API key here"
          autoComplete="off"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSave()}
          autoFocus
        />
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
