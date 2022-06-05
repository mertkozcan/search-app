import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { GetBrands } from "../../actions/productAction";

import "../../css/SidebarBrand.css";

function Brand(props) {
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    GetBrands(props.selectedColors).then((brands) => {
      setBrands(brands);
    });
  }, [props.selectedColors]);

  const handleClick = (brand) => {
    var newSelectedBrands = [];
    if (selectedBrands.includes(brand)) {
      newSelectedBrands=selectedBrands.filter((item)=>item!=brand);
    } else {
      newSelectedBrands.push(brand);
    }
    setSelectedBrands(newSelectedBrands);

    props.handleSelectedBrands(newSelectedBrands);
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

Brand.propTypes = {
  handleSelectedBrands: PropTypes.func,
  selectedColors: PropTypes.array,
};

export default Brand;
