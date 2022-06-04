import React, { Component } from "react";

import logo from '../img/logo.png';
import searchIcon from '../img/search.png';
import "../css/Header.css";

export class Header extends Component {
  static displayName = Header.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <img className="logo" src={logo}/>
        <img className="search-icon" src={searchIcon}/>
        <input
          className="search-input"
            type="text"
            id="header-search"
            placeholder="25 milyon’dan fazla ürün içerisinde ara"
            name="s" 
        />
        <div className="header-basket">
          Sepetim
        </div>
      </header>
    );
  }
}
