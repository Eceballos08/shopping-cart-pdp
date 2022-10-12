import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ item }) => {
  const { AddItemToCart, DeleteItemToCart } = useContext(CartContext);

  return (
    <div className="item-cart-container">
      <img src={item.img} className="item-cart-image" />
      <div>
        <p className="item-cart-name">{item.name}</p>
        <p className="item-cart-price">${item.price}</p>
      </div>
      <div className="buttons-container">
        <button onClick={() => AddItemToCart(item)}>+</button>
        <p>{item.amount}</p>
        <button onClick={() => DeleteItemToCart(item)}>-</button>
      </div>
    </div>
  );
};

export default ItemCart;
