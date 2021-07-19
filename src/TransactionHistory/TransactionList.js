import React from "react";
import TransactionItem from "./TransactionItem";
import "./TransactionList.css";

const TransactionList = (props) => {
  return (
    <ul className="transaction-list">
      <TransactionItem />
      <TransactionItem />
    </ul>
  );
};

export default TransactionList;
