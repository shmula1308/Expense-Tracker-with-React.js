import React from "react";
import "./NewTransaction.css";
import TransactionForm from "./TransactionForm";

const NewTransaction = (props) => {
  return (
    <div className="new-transaction">
      <h2 className="new-transaction__title">New Transaction</h2>
      <TransactionForm />
    </div>
  );
};

export default NewTransaction;
