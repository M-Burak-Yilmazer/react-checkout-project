import React from "react";

import ProductForm from "../components/ProductForm";

const NewProduct = ({ getProduct }) => {
  return (
    <div className="container ">
      <ProductForm getProduct={getProduct} />
    </div>
  );
};

export default NewProduct;
