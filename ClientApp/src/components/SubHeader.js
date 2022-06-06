import React, { Component } from "react";
import PropTypes from "prop-types";

import "../css/SubHeader.css";

const SubHeader = (props) => {

  const handleChange = (event) => {
    props.handleOrder(event.target.value);
  };
  return (
    <div className="sub-header">
      <div>
        <h5 className="page-title">Arama</h5>
        <p className="sub-title">{props.searchText && props.searchText.length>1 ? "Aranan Kelime: " + props.searchText : ""}</p>
      </div>
      <div>
        <select onChange={handleChange} value={props.selectedOrder ? props.selectedOrder : ""} className="sub-header-select">
          <option value="" disabled hidden>
            Sıralama
          </option>
          <option value="PRICE_ASC">En Düşük Fiyat</option>
          <option value="PRICE_DESC">En Yüksek Fiyat</option>
          <option value="NEW_ASC">En Yeniler {"(A" + ">" + "Z)"}</option>
          <option value="NEW_DESC">En Yeniler {"(Z" + ">" + "A)"}</option>
        </select>
      </div>
    </div>
  );
};

SubHeader.propTypes = {
  handleOrder: PropTypes.func,
  selectedOrder: PropTypes.string,
  searchText: PropTypes.string
};

export default SubHeader;
