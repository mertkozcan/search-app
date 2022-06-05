import React, { Component, useState } from "react";
import PropTypes from 'prop-types';

import logo from "../img/logo.png";
import searchIcon from "../img/search.png";
import "../css/Header.css";

function Header(props) {

  const handleChange = (event) => {
    if (event.target.value) {
      props.handleSearchText(event.target.value);
    }
  };

  return (
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
      <div className="header-basket">Sepetim</div>
    </header>
  );
}

Header.propTypes = {
  handleSearchText:PropTypes.func
};

export default Header;
