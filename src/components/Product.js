import React from "react";

const Product = ({ id }) => {
  return (
    <article className="product">
      <h2>{id}</h2>
    </article>
  );
};

export default Product;
