import React from "react";
import PropTypes from "prop-types";

import '../css/BasketItem.css';

const BasketItem = (props) => {

  const handleRemove = (productID) => {
    var del = confirm("Ürün sepetten silinecek. Devam etmek istiyor musunuz?");

    if (del) {
      props.handleBasketRemove(productID);
    }
  }

  return (
    <div >
      <img className="basket-item-img" src={require("../img/products/" + props.imageName + ".png")} />
        {props.productName.substr(0,20) + "..."}
      <div className="basket-item-remove" onClick={() => handleRemove(props.productID)}>Kaldır</div>    
    </div>
  );
};

BasketItem.propTypes = {
  productID: PropTypes.number,
  imageName: PropTypes.string,
  productName: PropTypes.string,
  handleBasketRemove:PropTypes.func
};

export default BasketItem;
