import React, { useState, useEffect } from "react";

import { GetBrands } from "../../actions/productAction";

import "../../css/SidebarBrand.css";

function Brand(props) {
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    GetBrands().then((brands) => {
      setBrands(brands);
    });
  }, []);

  const handleClick = (brand) => {
    var newSelectedBrands=selectedBrands;
    if (newSelectedBrands.includes(brand)) {
      const index = newSelectedBrands.indexOf(brand);
      if (index > -1) {
        newSelectedBrands.splice(index, 1);
      }
    }
    else {
      newSelectedBrands.push(brand);
    }
    setSelectedBrands(newSelectedBrands);
  };

  return (
    <div>
      <h6 className="brand-title">Marka</h6>
      <div className="brand-list">
        {brands &&
          brands.length > 0 &&
          brands.map((brand, id) => {
            return (
              <p
                key={id}
                onClick={() => handleClick(brand.Brand)}
                className="brand-text">
                {brand.Brand + " (" + brand.BrandCount + ")"}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default Brand;
