import React from "react";
import CurrentBalance from "./CurrentBalance";
import Account from "./Account";
import "./AccountHeader.css";

const AccountHeader = (props) => {
  return (
    <div className="account-header">
      <CurrentBalance />
      <Account />
    </div>
  );
};

export default AccountHeader;
