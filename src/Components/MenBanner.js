import React from "react";
import stylesheet from "./scss/stylesheet.css";
function MenBanner() {
  return (
    <div className="contenting">
      <h2 className="h2-contenting" style={{ fontWeight: "900" }}>
        Sale On men Products upto 60% off
      </h2>
      <img
        className="img-contenting"
        src={require("../img/banner1.png")}
        alt=""
      />
    </div>
  );
}

export default MenBanner;
