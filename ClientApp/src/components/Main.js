import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../css/Main.css";
import Product from "./Product";
import { SearchProduct, GetAllProducts,SearchProductWithFilters } from "../actions/productAction";

function Main(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (props.searchText && props.searchText.length > 1) {
      SearchProduct(props.searchText).then((products) => {
        setProducts(products);
      });
    }
    else if ((props.colorFilters && props.colorFilters.length>0) || (props.brandFilters && props.brandFilters.length>0)) {
      SearchProductWithFilters(props.colorFilters,props.brandFilters).then((products) => {
        setProducts(products);
      });
    }
    else {
      GetAllProducts().then((products) => {
        setProducts(products);
      });
    }
  }, [props.searchText,props.colorFilters,props.brandFilters]);

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
  colorFilters: PropTypes.array,
  brandFilters: PropTypes.array
};

export default Main;
