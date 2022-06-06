import React from "react";
import PropTypes from "prop-types";

import "../../css/SidebarOrder.css";

function Order(props) {

  const handleClick = (event) => {
    props.handleSelectedOrder(event.target.id);
  }

  return (
    <div>
      <h6 className="order-title">Sıralama</h6>
      <div className="order-list">
        <p id="PRICE_ASC" className="order-text" onClick={(event) => handleClick(event)}>En Düşük Fiyat</p>
        <p id="PRICE_DESC" className="order-text" onClick={(event) => handleClick(event)}>En Yüksek Fiyat</p>
        <p id="NEW_ASC" className="order-text" onClick={(event) => handleClick(event)}>En Yeniler {"(A" +">"+ "Z)"}</p>
        <p id="NEW_DESC" className="order-text" onClick={(event) => handleClick(event)}>En Yeniler {"(Z" +">"+ "A)"}</p>
      </div>
    </div>
  );
}

Order.propTypes = {
  handleSelectedOrder: PropTypes.func
};

export default Order;
