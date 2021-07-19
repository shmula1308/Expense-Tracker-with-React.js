import React from "react";
import "./TransactionForm.css";

const TransactionForm = (props) => {
  return (
    <form>
      <div className="form-controls">
        <div className="form-control">
          <label className="form-control__label">Text</label>
          <input
            type="text"
            className="form-control__input"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label className="form-control__label">
            Amount<span>(negative - expense, positive - income)</span>
          </label>
          <input
            type="number"
            className="form-control__input"
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
