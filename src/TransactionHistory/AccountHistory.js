import React from "react";
import "./AccountHistory.css";
import TransactionList from "./TransactionList";

const AccountHistory = (props) => {
  return (
    <div className="account-history">
      <h2 className="account-history__title">History</h2>
      <TransactionList />
    </div>
  );
};

export default AccountHistory;
