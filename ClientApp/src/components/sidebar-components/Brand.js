import React, { useState, useEffect } from "react";

import { GetBrands } from "../../actions/productAction";

import "../../css/SidebarBrand.css";

function Brand(props) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    GetBrands().then((brands) => {
      setBrands(brands);
    });
  }, []);

  return (
    <div>
      <h6 className="brand-title">Marka</h6>
      <div className="brand-list">
        {brands &&
          brands.length > 0 &&
          brands.map((brand) => {
            return <p className="brand-text">{brand.Brand +" ("+ brand.BrandCount+")"}</p>;
          })}
      </div>
    </div>
  );
}

export default Brand;
