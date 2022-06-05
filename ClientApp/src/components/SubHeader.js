import React, { Component } from "react";

import "../css/SubHeader.css";

const SubHeader = () => {

  const handleChange = (event) => {};

  return (
    <div className="sub-header">
      <div>
        <h5 className="page-title">iPhone iOS cep telefonu</h5>
        <p className="sub-title">Aranan Kelime:iphone</p>
      </div>
      <div>
        <select onChange={handleChange} value="" className="sub-header-select">
          <option value="" disabled hidden>
            Sıralama
          </option>
          <option value="First">En Düşük Fiyat</option>
          <option value="Second">En Yüksek Fiyat</option>
          <option value="Third">En Yeniler {"(A" + ">" + "Z)"}</option>
          <option value="Fourth">En Yeniler {"(Z" + ">" + "A)"}</option>
        </select>
      </div>
    </div>
  );
};

export default SubHeader;
