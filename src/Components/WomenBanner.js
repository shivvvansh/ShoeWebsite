import React from "react";
import wo from "./scss/WomenBanner.css";
function WomenBanner() {
  return (
    <div className="wo">
      <div className="wo-h3">
        All new women collection <br />
        <button className="button">Shop Now</button>
      </div>
      <img className="wo-img" src={require("../img/img-women6.jpeg")} alt="" />
    </div>
  );
}

export default WomenBanner;
