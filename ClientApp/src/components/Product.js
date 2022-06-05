import React, { useState } from "react";
import PropTypes from "prop-types";

import "../css/Product.css";

const Product = (props) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="product"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img src={require("../img/products/" + props.ImageName + ".png")} />
      <p>{props.ProductName}</p>
      {hover ? (
        <div className="add-basket">Sepete Ekle</div>
      ) : (
        <div>
          <p>Marka: {props.Brand}</p>
          <p>Renk: {props.Color}</p>
          <p>{props.Price} TL</p>
          <p>{props.Price} TL</p> <p>{props.DiscountPercentage}%</p>
        </div>
      )}
    </div>
  );
};

Product.propTypes = {
  ProductName: PropTypes.string,
  Brand: PropTypes.string,
  Color: PropTypes.string,
  Price: PropTypes.number,
  DiscountPercentage: PropTypes.number,
  ImageName: PropTypes.string,
};

export default Product;
