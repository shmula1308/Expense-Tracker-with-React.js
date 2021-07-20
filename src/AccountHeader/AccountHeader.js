import React from "react";
import CurrentBalance from "./CurrentBalance";
import Account from "./Account";
import "./AccountHeader.css";

const AccountHeader = (props) => {
  return (
    <div className="account-header">
      <CurrentBalance items={props.items} />
      <Account items={props.items} />
    </div>
  );
};

export default AccountHeader;
