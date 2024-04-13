import React from "react";
import "./scss/WomenBanner.css";
function MecroBannner() {
  return (
    <div className="wo">
      <img className="wos-img" src={require("../img/jj.jpg")} alt="" />
      <h3 className="wos-h3" style={{ fontWeight: "900" }}>
        Get 40% off on Nike <br /> & Branded Reebok shoes <br />
        <button className="button" style={{ color: "black", fontSize: "700" }}>
          Shop now
        </button>
      </h3>
    </div>
  );
}

export default MecroBannner;
