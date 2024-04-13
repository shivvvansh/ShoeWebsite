import React, { useContext } from "react";
import ShopContext from "../context/shop/ShopContext";
import MenItem from "./MenItem";
import WomenBanner from "./WomenBanner";
const Women = () => {
  const context = useContext(ShopContext);
  const { getMenShoe, MenProduct } = context;
  return (
    <div>
      <WomenBanner />
      <div className="container my-3">
        <div className="row">
          {context.MenProduct.map((element) => {
            return (
              <div
                className="col-md-4"
                style={{ margin: "auto" }}
                key={element._id}
              >
                <MenItem
                  title={element.title}
                  id={element._id}
                  desc={element.desc}
                  price={element.price}
                  image={element.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Women;
