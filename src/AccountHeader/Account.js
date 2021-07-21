import React from "react";
import Card from "../UI/Card";
import "./Account.css";

const Account = (props) => {
  let income = 0;
  let expense = 0;

  if (props.items.length > 0) {
    income = props.items
      .filter((item) => Number(item.amount) > 0)
      .reduce((a, b) => a + Number(b.amount), 0);
    expense = props.items
      .filter((item) => Number(item.amount) < 0)
      .reduce((a, b) => a + Number(b.amount), 0);
  }

  return (
    <Card className="account">
      <div className="account-column">
        <div className="account-label">income</div>
        <div className="account-money--income account-money">
          {"$" + income.toFixed(2)}
        </div>
      </div>
      <div className="account-column">
        <div className="account-label">expense</div>
        <div className="account-money--expense account-money">
          {"$" + Math.abs(expense).toFixed(2)}
        </div>
      </div>
    </Card>
  );
};

export default Account;
