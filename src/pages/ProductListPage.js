import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/ProductListPage.css";

const products = ["car", "bike", "motocycle"];

const ProductListPage = () => {
  const list = products.map((product) => (
    <li key={product}>
      <NavLink to={`/product/${product}`}>{product}</NavLink>
    </li>
  ));

  return (
    <div className="products">
      <h2>Lista produktów</h2>
      <ul>{list}</ul>
    </div>
  );
};

export default ProductListPage;
