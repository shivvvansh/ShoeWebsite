import React, { useContext } from "react";
import ShopContext from "../context/shop/ShopContext";
import ProductItem from "./ProductItem";
import Prof from "./scss/Product.css";

function Products(props) {
  const context = useContext(ShopContext);

  return (
    <div className="container my-3">
      <div className="row">
        {context.articles.map((element) => {
          return (
            <div
              className="col-md-4"
              style={{ margin: "auto" }}
              key={element._id}
            >
              <ProductItem
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
  );
}

export default Products;
