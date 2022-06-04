import React, { Component } from "react";

import "../css/Sidebar.css";
import Brand from "./sidebar-components/Brand";
import Color from "./sidebar-components/Color";
import Order from "./sidebar-components/Order";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <Color />
        <Order />
        <Brand />
      </div>
    );
  }
}
