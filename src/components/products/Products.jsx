import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ProductsData } from "../../data/ProductsData";
import "./Products.css";

const Products = () => {
  const [disableButton, setDisableButton] = useState(false);

  const { cartItems, AddItemToCart } = useContext(CartContext);

  const validateAmount = () => {
    if (cartItems.amount > ProductsData.amount) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  return (
    <div className="products-container">
      {ProductsData.map((product) => {
        const cartItem =
          cartItems.find((cartItem) => cartItem.id == product.id) ?? null;
        const isDisabled = cartItem ? cartItem.amount >= product.stock : false;
        return (
          <div key={product.id} className="product-container">
            <h3 className="name-product">{product.name}</h3>
            <img src={product.img} className="product-image" />
            <div>
              <p className="description-product">{product.description}</p>
            </div>
            <div className="product-footer">
              <p className="price-product">${product.price}</p>

              {console.log({ product })}

              <button
                onClick={() => AddItemToCart(product)}
                className="add-product-button"
                disabled={isDisabled}
              >
                <span> {isDisabled ? "Out of stock" : "Agregar"} </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
