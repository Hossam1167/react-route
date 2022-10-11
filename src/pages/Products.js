import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">cARPET</Link>
        </li>
        <li>
          <Link to="/products/p3">oNLINE course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
