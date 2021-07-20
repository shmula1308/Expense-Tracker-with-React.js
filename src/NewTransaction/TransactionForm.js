import React, { useState } from "react";
import "./TransactionForm.css";
import Card from "../UI/Card";

const TransactionForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const onSubmitHandler = (ev) => {
    ev.preventDefault();

    const enteredTransaction = {
      title: enteredTitle,
      amount: enteredAmount,
      id: Date.now().toString(),
    };

    props.onEnteredTransaction(enteredTransaction);
    setEnteredTitle("");
    setEnteredAmount("");
  };

  const titleChangeHandler = (ev) => {
    setEnteredTitle(ev.target.value);
  };

  const amountChangeHandler = (ev) => {
    setEnteredAmount(ev.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-controls">
        <div className="form-control">
          <label className="form-control__label">Text</label>
          <input
            value={enteredTitle}
            type="text"
            className="form-control__input"
            placeholder="Enter text..."
            onChange={titleChangeHandler}
          />
        </div>
        <div className="form-control">
          <label className="form-control__label">
            Amount<span>(negative - expense, positive - income)</span>
          </label>
          <input
            value={enteredAmount}
            type="number"
            className="form-control__input"
            placeholder="Enter amount..."
            onChange={amountChangeHandler}
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
