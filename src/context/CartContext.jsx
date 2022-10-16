import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    console.log("aca esta el producto", cartItems);
  }, [cartItems]);

  const AddItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return {
              ...inCart,
              amount: inCart.amount + 1,
            };
          } else return productInCart;
        })
      );
      console.log(product.amount);
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };
  /*function to delete items of the cart */
  const DeleteItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter((productInCart) => productInCart.id !== product.id)
      );
    } else {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, AddItemToCart, DeleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
