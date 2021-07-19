import React from "react";
import Card from "../UI/Card";
import "./TransactionItem.css";

const TransactionItem = (props) => {
  //Receive type of transaction from props to style the item dynamically

  return (
    <Card>
      <li className="transaction-item transaction-item--expense">
        <span className="transaction-title">Bread</span>
        <span className="transaction-amount">$10</span>
      </li>
    </Card>
  );
};

export default TransactionItem;
