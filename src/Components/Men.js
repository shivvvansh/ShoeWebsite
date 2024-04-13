import React, { useContext } from "react";
import ShopContext from "../context/shop/ShopContext";
import MecroBannner from "./MecroBannner";
import MenBanner from "./MenBanner";
import MenItem from "./MenItem";
const Men = () => {
  const context = useContext(ShopContext);
  const { getMenShoe, MenProduct } = context;
  return (
    <div>
      <MecroBannner />
      {/* <MenBanner/> */}
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

export default Men;
