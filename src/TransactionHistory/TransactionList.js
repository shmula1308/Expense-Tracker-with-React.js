import React from "react";
import TransactionItem from "./TransactionItem";
import "./TransactionList.css";

const TransactionList = (props) => {
  return (
    <ul className="transaction-list">
      {props.items.map((item) => {
        return (
          <TransactionItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            id={item.id}
            onDelete={props.onDeleteItem}
          />
        );
      })}
    </ul>
  );
};

export default TransactionList;
