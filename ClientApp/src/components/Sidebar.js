import React, { Component } from "react";

import "../css/Sidebar.css";
import Brand from "./sidebar-components/Brand";
import Color from "./sidebar-components/Color";
import Order from "./sidebar-components/Order";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Color />
      <Order />
      <Brand />
    </div>
  );
};

export default Sidebar;