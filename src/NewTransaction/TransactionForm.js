import React from "react";
import "./TransactionForm.css";
import Card from "../UI/Card";

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
        <Card>
          <button type="submit" className="form-btn">
            Add transaction
          </button>
        </Card>
      </div>
    </form>
  );
};

export default TransactionForm;
