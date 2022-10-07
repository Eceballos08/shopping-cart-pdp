import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ProductsData } from "../../data/ProductosData";
import "./Products.css";

const Products = () => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="products-container">
      {ProductsData.map((product) => (
        <div key={product.id} className="product-container">
          <img src={product.img} />
          <div>
            <h3 className="name-product">{product.name}</h3>
            <p className="description-product">{product.description}</p>
          </div>
          <div className="product-footer">
            <p className="price-product">${product.price}</p>
            <button
              onClick={() => addItemToCart(product)}
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
