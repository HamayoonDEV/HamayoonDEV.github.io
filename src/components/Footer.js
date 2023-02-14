import React from "react";
import "./Footer.css";

const Footer = ({ Icon, color }) => {
  return (
    <div className="footer">
      <div className="icons">
        <Icon style={{ color: color, fontSize: "40px", marginRight: "20px" }} />
      </div>
    </div>
  );
};

export default Footer;
