import React from "react";
import "../../css/SidebarOrder.css";

function Order(props) {
  return (
    <div>
      <h6 className="order-title">Sıralama</h6>
      <div className="order-list">
        <p className="order-text">En Düşük Fiyat</p>
        <p className="order-text">En Yüksek Fiyat</p>
        <p className="order-text">En Yeniler {"(A" +">"+ "Z)"}</p>
        <p className="order-text">En Yeniler {"(Z" +">"+ "A)"}</p>
      </div>
    </div>
  );
}

export default Order;
