import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ProductsData } from "../../data/ProductsData";
import "./Products.css";

const Products = () => {
  const { AddItemToCart } = useContext(CartContext);

  return (
    <div className="products-container">
      {ProductsData.map((product, id) => (
        <div key={id} className="product-container">
          <img src={product.img} />
          <div>
            <h3 className="name-product">{product.name}</h3>
            <p className="description-product">{product.description}</p>
          </div>
          <div className="product-footer">
            <p className="price-product">${product.price}</p>
            <button
              onClick={() => AddItemToCart(product)}
              className="add-product-button"
            >
              Agregar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
