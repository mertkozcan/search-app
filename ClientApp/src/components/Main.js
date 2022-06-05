import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../css/Main.css";
import Product from "./Product";
import { SearchProduct, GetAllProducts } from "../actions/productAction";

function Main(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (props.searchText && props.searchText.length < 2) {
      GetAllProducts().then((products) => {
        setProducts(products);
      });
    } else if (props.searchText && props.searchText.length > 1) {
      SearchProduct(props.searchText).then((products) => {
        setProducts(products);
      });
    }
  }, [props.searchText]);

  return (
    <div className="main">
      {products &&
        products.length > 0 &&
        products.map((product, id) => {
          return (
            <Product
              key={id}
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

Main.propTypes = {
  searchText: PropTypes.string,
};

export default Main;
