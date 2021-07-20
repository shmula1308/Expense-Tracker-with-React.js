import React, { useState } from "react";
import "./App.css";
import AccountHeader from "./AccountHeader/AccountHeader";
import AccountHistory from "./TransactionHistory/AccountHistory";
import Newtransaction from "./NewTransaction/NewTransaction";

const App = () => {
  const transactionsArray =
    JSON.parse(localStorage.getItem("transactions")) || [];

  const [transactions, setTransactions] = useState(transactionsArray);

  const newTransactionHandler = (newTransaction) => {
    setTransactions((prevTransactions) => {
      const transactions = [...prevTransactions];
      transactions.unshift(newTransaction);

      setStorage(transactions);
      return transactions;
    });
  };

  const setStorage = (transactions) => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  };

  const deleteTransactionHandler = (deletedTransaction) => {
    setTransactions((prevTransactions) => {
      const filteredTransactions = prevTransactions.filter(
        (transaction) => transaction.id !== deletedTransaction
      );

      setStorage(filteredTransactions);
      return filteredTransactions;
    });
  };

  return (
    <div className="app">
      <h2 className="app-title">Expense Tracker</h2>
      <AccountHeader items={transactions} />
      <AccountHistory
        items={transactions}
        onDeleteTransaction={deleteTransactionHandler}
      />
      <Newtransaction onNewTransaction={newTransactionHandler} />
    </div>
  );
};

export default App;
