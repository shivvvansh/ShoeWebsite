import React, { useState, useContext } from "react";
import CartItem from "./CartItem";
import ShopContext from "../context/shop/ShopContext";
import "./scss/Cart.css";

function Cart(props) {
  const tokenchecker = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("token is not pressent");
    } else {
      console.log("token is present");
    }
  };

  const context = useContext(ShopContext);
  const { getCartItems } = context;
  let prof = 0;
  return (
    <div className="contra">
      <div className="rows">
        {context.cproduct.map((element) => {
          return (
            <div
              className="col-md-4"
              style={{ margin: "22px auto" }}
              key={element._id}
            >
              <p className="blockdisplay" style={{ display: "none" }}>
                {(prof = prof + element.price)}
              </p>
              <CartItem
                title={element.title}
                desc={element.desc}
                price={element.price}
                id={element._id}
                image={element.image}
                quantity={2}
              />
            </div>
          );
        })}
      </div>
      <div className="col34">
        <img className="col34-img" src={require("../img/tt.jpg")} alt="" />
        <div className="text-order">
          <p
            className="tototott"
            style={{ color: "white", padding: "12px", textAlign: "center" }}
          >
            Safe and secure payment . Easy returns 100% authentic products
          </p>
          <p>
            Total price of your order is:
            <span style={{ color: "pink", marginLeft: "20px" }}> {prof}</span>
          </p>
          <p>
            Original value of order is :{" "}
            <span style={{ color: "pink", marginLeft: "20px" }}>
              {prof * 1.5}
            </span>
            <br />
          </p>
          <p>deliver on sunday Mar 13 | delivery charge 89</p>
          <button
            className="button2"
            style={{ margin: "22px 0px" }}
            onClick={tokenchecker}
          >
            order now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
