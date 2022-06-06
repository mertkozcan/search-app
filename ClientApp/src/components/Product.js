import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";

import "../css/Product.css";

const Product = (props) => {
  const [hover, setHover] = useState(false);
  const [isInBasket, setIsInBasket] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {  
     isProductInBasket(props.productItem.ProductID);
    function storageEventHandler(event) {
        if (event.key=="basket") {
          isProductInBasket(props.productItem.ProductID);
        }
      }
      window.addEventListener("storage", storageEventHandler);
      return () => {
          window.removeEventListener("storage", storageEventHandler);
      };  
  }, [localStorage.getItem("basket")]);

  const handleAddBasket = (product) => {
    var basketList = JSON.parse(localStorage.getItem("basket"));
    if (!basketList) {
      basketList = [];
      basketList.push(product);
      setIsInBasket(true);
    }
    else if (basketList && basketList.filter((item) => item.ProductID == product.ProductID).length ==0) {
      basketList.push(product);
      setIsInBasket(true);
    }
    
    localStorage.setItem("basket", JSON.stringify(basketList));
  };

  const isProductInBasket = (ProductID) => {
    var basketList = JSON.parse(localStorage.getItem("basket"));

    if (basketList && basketList.filter((item) => item.ProductID == ProductID).length > 0) {
      return true;
    }
    else {
      return false;
    }
  };

  const nameTwoLine =
    props.productItem.ProductName && props.productItem.ProductName.length > 31 ? true : false;

  const discountPrice = (props.productItem.Price / 100) * props.productItem.DiscountPercentage
  const discountPrice2 = (discountPrice-Math.floor(discountPrice)).toString().split(".")
  
  return (
    <div
      className="product"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={hover ? "product-image-hover" : "product-image"}>
        <img
          src={require("../img/products/" + props.productItem.ImageName + ".png")}
        />
      </div>
      <p>
        {props.productItem.ProductName && props.productItem.ProductName.trim().length > 55 ? props.productItem.ProductName.substr(0, 54) + "..." : props.productItem.ProductName}
      </p>
      {!nameTwoLine ? <br /> : null}
      {hover ? (
        <div
          className={isProductInBasket(props.productItem.ProductID) || isInBasket ?"add-basket-disabled" : "add-basket" }
          onClick={() => handleAddBasket(props.productItem)}
        >
          {isProductInBasket(props.productItem.ProductID) || isInBasket ? "Ürünü sepete ekleyemezsiniz." : "Sepete Ekle"}
        </div>
      ) : (
        <div>
          <p className="product-p"><b>Marka:</b> {props.productItem.Brand}</p>
          <p><b>Renk:</b> {props.productItem.Color}</p>
          <b><p className="product-p">{Math.floor(discountPrice)+ "." + (discountPrice2[1] ? discountPrice2[1].substring(0,2) : "00")} TL</p></b>
          <label className="product-price">{props.productItem.Price} TL </label> <label className="product-discount">{props.productItem.DiscountPercentage}%</label>
        </div>
      )}
    </div>
  );
};

Product.propTypes = {
  productItem: PropTypes.object,
};

export default Product;
