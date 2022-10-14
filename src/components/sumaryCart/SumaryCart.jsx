import React from "react";
import "./sumaryCart.css";

const SumaryCart = () => {
  return (
    <div className="sumary-container">
      <div className="coupon-container">
        <h5 className="coupon-title">Código de descuento</h5>
        <input className="coupon-button" />
      </div>
      <div className="information-container">
        <p>Subtotal: </p>
        <p>Descuento: </p>
      </div>
    </div>
  );
};

export default SumaryCart;
