import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { GetColors } from "../../actions/productAction";

import "../../css/SidebarColor.css";

function Color(props) {
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  useEffect(() => {
    GetColors(props.selectedBrands).then((colors) => {
      setColors(colors);
    });
  }, [props.selectedBrands]);

  const handleClick = (color) => {
    var newSelectedColors = [];
    if (selectedColors.includes(color)) {
      newSelectedColors=selectedColors.filter((item)=>item!=color);
    } else {
      newSelectedColors.push(color);
    }
    setSelectedColors(newSelectedColors);

    props.handleSelectedColors(newSelectedColors);
  };

  return (
    <div>
      <h6 className="color-title">Renk</h6>
      <div className="color-list">
        {colors &&
          colors.length > 0 &&
          colors.map((color, id) => {
            return (
              <p
                key={id}
                onClick={() => handleClick(color.Color)}
                className="color-text">
                {color.Color + " (" + color.ColorCount + ")"}
              </p>
            );
          })}
      </div>
    </div>
  );
}

Color.propTypes = {
  handleSelectedColors: PropTypes.func,
  selectedBrands: PropTypes.array,
};

export default Color;
