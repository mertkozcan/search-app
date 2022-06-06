import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import logo from "../img/logo.png";
import searchIcon from "../img/search.png";
import "../css/Header.css";
import BasketItem from "./BasketItem";

function Header(props) {
  const [hoverHeaderBasket, setHoverHeaderBasket] = useState(false);
  const [hoverBasket, setHoverBasket] = useState(false);
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")));

  useEffect(() => {  
    setBasket(JSON.parse(localStorage.getItem("basket")));
   function storageEventHandler(event) {
      if (event.key=="basket") {
         setBasket(JSON.parse(localStorage.getItem("basket")));
      }
    }
    window.addEventListener("storage", storageEventHandler);
    return () => {
        window.removeEventListener("storage", storageEventHandler);
    };  
  }, []);

  const handleHeaderBasketMouseEnter = () => {
    setHoverHeaderBasket(true);
  };
  const handleHeaderBasketMouseLeave = () => {
    setHoverHeaderBasket(false);
  };

  const handleBasketMouseEnter = () => {
    setHoverBasket(true);
  };
  const handleBasketMouseLeave = () => {
    setHoverBasket(false);
  };

  const handleChange = (event) => {
    if (event.target.value) {
      props.handleSearchText(event.target.value);
    }
  };

  const handleBasketRemove = (productID) => {
    var basket = JSON.parse(localStorage.getItem("basket"));
    var newBasket = basket.filter((item) => item.ProductID != productID);
    localStorage.setItem("basket", JSON.stringify(newBasket));
    setBasket(newBasket);
  }

  return (<>
    <header className="header">
      <img className="logo" src={logo} />
      <img className="search-icon" src={searchIcon} />
      <input
        className="search-input"
        type="text"
        id="header-search"
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
        name="s"
        onChange={handleChange}
      />
      <div
        className={
          hoverHeaderBasket || hoverBasket
            ? "header-basket-open"
            : "header-basket"
        }
        onMouseEnter={handleHeaderBasketMouseEnter}
        onMouseLeave={handleHeaderBasketMouseLeave}
      >
        Sepetim
      </div>
      {hoverHeaderBasket || hoverBasket ? (
        <div
          className="basket"
          onMouseEnter={handleBasketMouseEnter}
          onMouseLeave={handleBasketMouseLeave}
        >
          {basket && basket.length>0 && basket.map((item,id) => {
           return <BasketItem key={id} productID={item.ProductID} imageName={item.ImageName} productName={item.ProductName} handleBasketRemove={handleBasketRemove} />
          })}
        </div>
      ) : null}
    </header>
    </>
  );
}

Header.propTypes = {
  handleSearchText: PropTypes.func,
};

export default Header;
