import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../itemCart/ItemCart";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);
  const initialValue = 0;

  //every time shopping cart change, the amount of products is updated
  useEffect(() => {
    setProductsLength(
      cartItems.reduce(
        (previousValue, currentValue) => previousValue + currentValue.amount,
        initialValue
      )
    );
  }, [cartItems]);

  const totalItemsCart = cartItems.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.amount * currentValue.price,
    initialValue
  );

  return (
    <div className="cart-container">
      <div className="button-cart-container">
        <div className="cart-button" onClick={() => setCartOpen(!cartOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </div>
        {!cartOpen && <div>{productsLength}</div>}
      </div>

      {cartItems && cartOpen && (
        <div className="open-cart-container">
          <h3 className="header-cart">Tu lista</h3>
          {cartItems.length > 0 ? (
            cartItems.map((item) => <ItemCart key={item.id} item={item} />)
          ) : (
            <span>Agrega tu primer producto al carrito</span>
          )}
          <h3>$ {totalItemsCart}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
