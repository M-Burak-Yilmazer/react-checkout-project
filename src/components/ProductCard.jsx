import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  getProduct,
  product,
  handleRemove,
  quantityMinus,
  quantityPlus,
}) => {
  const { name, id, image, price, dampingRate, amount } = product;
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate("/updateproduct", { state: product });
  };

  return (
    <div>
      <div key={id} className="card shadow-lg mb-3">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={image}
              className="w-100 h-100 rounded-start"
              alt={name}
              height="250px"
              title={name}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title cardTitle" role="button" onClick={handleUpdate}>
                {name}
              </h5>
              <div className="product-price">
                <p className="text-warning h2">
                  <span className="damping-price">
                    ${(Number(price) * Number(dampingRate)).toFixed(2)}
                  </span>
                  <span className="h5 ms-2 text-dark text-decoration-line-through">
                    ${Number(price).toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
                <div className="quantity-controller">
                  <button
                    type="button"
                    onClick={() => {
                      quantityMinus(product);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <p className="d-inline mx-4" id="product-quantity">
                    {Number(amount)}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      quantityPlus(product);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="product-removal mt-4">
                <button
                  type="button"
                  onClick={() => {
                    handleRemove(id);
                  }}
                  className="btn btn-danger btn-sm w-100 remove-product"
                >
                  <i className="fa-solid fa-trash-can me-2"></i>Remove
                </button>
              </div>
              <div className="mt-2">
                Product Total: $
                <span className="product-line-price">
                  {(
                    Number(amount) *
                    (Number(price) - Number(price) * Number(dampingRate))
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
