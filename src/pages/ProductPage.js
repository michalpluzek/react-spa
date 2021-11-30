import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = () => {
  const params = useParams();

  return (
    <>
      <div>Strona produktu</div>
      <Product id={params.id} />
      <NavLink to="/products">Powrót do listy produktów</NavLink>
    </>
  );
};

export default ProductPage;
