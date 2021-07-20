import React from "react";
import "./CurrentBalance.css";

const CurrentBalance = (props) => {
  let currentBalance = 0;
  if (props.items.length > 0) {
    currentBalance = props.items.reduce((a, b) => a + Number(b.amount), 0);
  }

  return (
    <div className="balance">
      <span className="balance-label">your balance</span>
      <p className="balance-money">{"$" + currentBalance}</p>
    </div>
  );
};

export default CurrentBalance;
