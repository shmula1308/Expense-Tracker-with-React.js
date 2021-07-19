import React from "react";
import "./App.css";
import AccountHeader from "./AccountHeader/AccountHeader";
import AccountHistory from "./TransactionHistory/AccountHistory";
import Newtransaction from "./NewTransaction/NewTransaction";

function App() {
  return (
    <div className="app">
      <h2 className="app-title">Expense Tracker</h2>
      <AccountHeader />
      <AccountHistory />
      <Newtransaction />
    </div>
  );
}

export default App;
