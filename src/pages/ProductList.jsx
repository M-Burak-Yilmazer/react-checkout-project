import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";

const ProductList = ({ product }) => {
  return (
    <div className="container mt-3">
      <div className=" d-sm-block d-md-flex">
        <p className="text-center text-danger w-100">Loading....</p>

        <>
          <article id="product-panel" className="col-md-5">
            {product.map((products) => (
              <ProductCard key={products.id} {...products} />
            ))}
          </article>
          <article className="col-md-5 m-3">
            <CardTotal />
          </article>
        </>

        <p className="text-center text-danger w-100">No products data...</p>
      </div>
    </div>
  );
};

export default ProductList;
