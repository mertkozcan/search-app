import React, { useState } from "react";
import PropTypes from "prop-types";

import "../css/Sidebar.css";
import Brand from "./sidebar-components/Brand";
import Color from "./sidebar-components/Color";
import Order from "./sidebar-components/Order";

const Sidebar = (props) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const handleSelectedBrands = (brands) => {
    setSelectedBrands(brands);
    props.handleFilters(selectedColors,brands);
  };

  const handleSelectedColors = (colors) => {
    setSelectedColors(colors);
    props.handleFilters(colors,selectedBrands);
  };

  return (
    <div className="sidebar">
      <Color handleSelectedColors={handleSelectedColors} selectedBrands={selectedBrands} />
      <Order />
      <Brand handleSelectedBrands={handleSelectedBrands} selectedColors={selectedColors} />
    </div>
  );
};

Sidebar.propTypes = {
  handleFilters: PropTypes.func
};

export default Sidebar;
