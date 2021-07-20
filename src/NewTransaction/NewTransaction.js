import React from "react";
import "./NewTransaction.css";
import TransactionForm from "./TransactionForm";

const NewTransaction = (props) => {
  
  const newTransactionHandler = (newTransaction) => {
    props.onNewTransaction(newTransaction);
  };
  
  return (
    <div className="new-transaction">
      <h2 className="new-transaction__title">New Transaction</h2>
      <TransactionForm onEnteredTransaction={newTransactionHandler} />
    </div>
  );
};

export default NewTransaction;
