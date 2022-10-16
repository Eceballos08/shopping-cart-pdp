import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ item }) => {
  const { AddItemToCart, DeleteItemToCart } = useContext(CartContext);

  return (
    <div className="item-cart-container">
      <img alt="" src={item.img} className="item-cart-image" />
      <div className="information-container">
        <p className="item-cart-name">{item.name}</p>
        <p className="item-cart-price">${item.price}</p>
      </div>
      <div className="buttons-container">
        <button className="button" onClick={() => DeleteItemToCart(item)}>
          -
        </button>
        <p className="amount-text">{item.amount}</p>
        <button
          className="button"
          onClick={() => AddItemToCart(item)}
          disabled={item.amount >= item.stock}
        >
          +
        </button>
      </div>
      <div className="price-increased-container">
        <p className="price-increased-text">${item.price * item.amount}</p>
      </div>
    </div>
  );
};

export default ItemCart;
