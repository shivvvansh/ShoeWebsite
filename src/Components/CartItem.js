import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../context/shop/ShopContext";
import "./scss/Cart.css";
function CartItem(props) {
  const context = useContext(ShopContext);
  const { DeleteCartitems, cartfire } = context;

  const { title, desc, price, id, image, quantity } = props;
  return (
    <div>
      <div className="card-frocks">
        <img src={require(`../img/${image}`)} className="boxs" alt="..." />
        <div className="card-bodys">
          <Link
            className="card-titles"
            to="/do"
            onClick={() => {
              cartfire(title, image, price, desc);
            }}
          >
            {title}
          </Link>
          <p className="card-texts"></p>
          <div className="button-colllections">
            <button className="buttons">{price}₹</button>
            <div className="buttons">
              <p>+</p>
              <p>{quantity}</p>
              <p>-</p>
            </div>
            <button className="buttons2">
              Buy now{" "}
              <i
                className="fas fa-shopping-bag"
                style={{ marginLeft: "4px" }}
              ></i>
            </button>
            <button
              className="buttons2"
              onClick={() => {
                DeleteCartitems(id);
              }}
            >
              Delete{" "}
              <i className="fas fa-trash" style={{ marginLeft: "4px" }}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
