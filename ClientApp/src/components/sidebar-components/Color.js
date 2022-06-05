import React, { useState, useEffect } from "react";

import { GetColors } from "../../actions/productAction";

import "../../css/SidebarColor.css";

function Color(props) {
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  useEffect(() => {
    GetColors().then((colors) => {
      setColors(colors);
    });
  }, []);

  const handleClick = (color) => {
    var newSelectedColors = selectedColors;
    if (newSelectedColors.includes(color)) {
      const index = newSelectedColors.indexOf(color);
      if (index > -1) {
        newSelectedColors.splice(index, 1);
      }
    } else {
      newSelectedColors.push(color);
    }
    setSelectedColors(newSelectedColors);
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

export default Color;
