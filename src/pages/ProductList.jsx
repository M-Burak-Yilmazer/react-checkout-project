import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import load from "../assets/loading.gif";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await axios(process.env.REACT_APP_URL);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(product);

  if (loading) {
    return (
      <div className="container mt-3 text-center">
        <img src={load} alt="loading" className="w-100" />
      </div>
    );
  } else if (product?.length === 0) {
    return (
      <div className="container mt-3 rounded-5 w-25 bg-info p-3">
        <p className="text-center text-dark  display-5 text-white ">
          No Products...
        </p>
      </div>
    );
  } else {
    return (
      <div className="container mt-3">
        <article id="product-panel" className="col-md-5">
          {product.map((products) => (
            <ProductCard key={products.id} {...products} />
          ))}
        </article>
        <article className="col-md-5 m-3">
          <CardTotal />
        </article>
      </div>
    );
  }
};

export default ProductList;
