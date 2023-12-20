import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import load from "../assets/loading.gif";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    setLoading(true);
    try {
      axios(process.env.REACT_APP_URL).then((res) => setProduct(res.data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  if (loading) {
    return (
      <div className="container mt-3 text-center">
        <img src={load} alt="" />
      </div>
    );
  } else if (product?.length === 0) {
    <div className="container mt-3 rounded-5 bg-dark p-3">
      <p className="text-center text-dark w-100 display-1 text-white ">
        No Books...
      </p>
    </div>;
  } else {
  }
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
};

export default ProductList;
