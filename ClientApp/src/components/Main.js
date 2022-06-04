import React, { useState, useEffect } from "react";

import "../css/Main.css";
import Product from "./Product";
import { GetAllProducts } from "../actions/productAction";

function Main(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetAllProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="main">
      {products &&
        products.length > 0 &&
        products.map((product) => {
          return (
            <Product
              ProductName={product.ProductName}
              Brand={product.Brand}
              Color={product.Color}
              Price={product.Price}
              DiscountPercentage={product.DiscountPercentage}
              ImageName={product.ImageName}
            />
          );
        })}
    </div>
  );
}

export default Main;
