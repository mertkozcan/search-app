import React, { Component } from "react";

import "../css/SubHeader.css";

export class SubHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sub-header">
        <h5 className="page-title">iPhone iOS cep telefonu</h5>
        <p className="sub-title">Aranan Kelime:iphone</p>
      </div>
    );
  }
}
