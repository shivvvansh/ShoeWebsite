import React from "react";
// import  from '../context/shop/ShopState';
import { useContext } from "react";
import cscscs from "./scss/Dockyard.css";
import ShopContext from "../context/shop/ShopContext";
function Dockyard() {
  const context = useContext(ShopContext);
  const { datafor, AddCartItem } = context;
  return (
    <>
      {context.datafor.map((element) => {
        return (
          <div className="rower" key={element.image}>
            <div className="img-sections">
              <img src={require(`../img/${element.image}`)} alt="" />
            </div>
            <div className="title-sections">
              <h1>{element.title}</h1>
              <p>{element.desc} </p>
              <h3>size available</h3>
              <div className="size-charts">
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
              </div>
              <div className="button-collection">
                <button className="button" style={{ margin: "22px 33px" }}>
                  {element.price}
                </button>
                <button
                  className="button2"
                  onClick={() => {
                    AddCartItem(
                      element.title,
                      element.desc,
                      element.image,
                      element.price
                    );
                  }}
                >
                  Add to Cart <i class="fas fa-shopping-basket"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Dockyard;
