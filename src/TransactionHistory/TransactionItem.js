import React from "react";
import Card from "../UI/Card";
import "./TransactionItem.css";

const TransactionItem = (props) => {
  const deleteItemHandler = () => {
    props.onDelete(props.id);
  };

  let transactionType = "transaction-item--expense";

  if (Number(props.amount) > 0) {
    transactionType = "transaction-item--income";
  }

  const classes = "transaction-item " + transactionType;

  return (
    <Card>
      <li className={classes} id={props.id}>
        <span className="transaction-delete" onClick={deleteItemHandler}>
          X
        </span>
        <span className="transaction-title">{props.title}</span>
        <span className="transaction-amount">{"$" + props.amount}</span>
      </li>
    </Card>
  );
};

export default TransactionItem;
