import React from "react";
import "./CurrentBalance.css";

const CurrentBalance = (props) => {
  return (
    <div className="balance">
      <span className="balance-label">your balance</span>
      <p className="balance-money">$9995.00</p>
    </div>
  );
};

export default CurrentBalance;
