import React from "react";
import Cart from "../../components/cart/Cart";
import Products from "../../components/products/Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Cart />
      <Products />
    </div>
  );
};

export default Home;
