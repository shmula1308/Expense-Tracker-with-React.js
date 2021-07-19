import React from "react";
import Card from "../UI/Card";
import "./Account.css";

const Account = (props) => {
  return (
    <Card className="account">
      <div className="account-column">
        <div className="account-label">income</div>
        <div className="account-money--income account-money">$10000.00</div>
      </div>
      <div className="account-column">
        <div className="account-label">expense</div>
        <div className="account-money--expense account-money">$10</div>
      </div>
    </Card>
  );
};

export default Account;
