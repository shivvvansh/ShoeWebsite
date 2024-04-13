import React from "react";
import { Link } from "react-router-dom";
function Banner3() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Shop for men & women
      </h1>
      <div
        style={{
          width: "100%",
          minHeight: "60vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div
          className="menimage"
          style={{
            width: "400px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <img
            src={require("../img/menShop.png")}
            alt=""
            style={{ width: "90%", minHeight: "40%", borderRadius: "12px" }}
          />
          <h3 style={{ textAlign: "center" }}>
            {" "}
            <button className="button">
              <Link to="/men" style={{ color: "white" }}>
                Men{" "}
              </Link>
            </button>{" "}
          </h3>
        </div>
        <div
          className="womenimage"
          style={{
            width: "400px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "red",
            margin: "auto",
            borderRadius: "12px",
          }}
        >
          <img
            src={require("../img/image_1.jpg")}
            alt=""
            style={{ width: "90%", minHeight: "40%", borderRadius: "12px" }}
          />
          <h3 style={{ textAlign: "center" }}>
            {" "}
            <button className="button">
              <Link to="/women" style={{ color: "white" }}>
                Women{" "}
              </Link>
            </button>{" "}
          </h3>
        </div>
      </div>
    </>
  );
}

export default Banner3;
