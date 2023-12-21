import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import load from "../assets/loading.gif";

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const res = await axios(process.env.REACT_APP_URL);
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}${id}/`);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  const quantityPlus = async (item) => {
    try {
      await axios.put(`${process.env.REACT_APP_URL}${item.id}/`, {
        ...item,
        amount: Number(item.amount) + 1,
      });
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  const quantityMinus = async (item) => {
    if (item.amount - 1 !== 0) {
      try {
        await axios.put(`${process.env.REACT_APP_URL}${item.id}/`, {
          ...item,
          amount: Number(item.amount) - 1,
        });
        getProduct();
      } catch (error) {
        console.log(error);
      }
    } else {
      handleRemove(item.id);
    }
  };

  return (
    <div className="container mt-3">
      <div className={product.length > 0 ? " d-sm-block d-md-flex" : ""}>
        {loading ? (
          <div className=" container mt-3 text-center">
            <img src={load} alt="loading" className="" />
          </div>
        ) : product.length > 0 ? (
          <>
            <article id="product-panel" className="col-md-5">
              {product.map((products) => (
                <ProductCard
                  key={products.id}
                  product={products}
                  getProduct={getProduct}
                  quantityMinus={quantityMinus}
                  quantityPlus={quantityPlus}
                  handleRemove={handleRemove}
                />
              ))}
            </article>
            <article className="col-md-5 m-3">
              <CardTotal product={product} />{" "}
            </article>
          </>
        ) : (
          <p className="text-center text-danger w-100">No products data...</p>
        )}
      </div>
    </div>
  );
};
export default ProductList;

//   if (initialLoading) {
//     return (
//       <div className="container mt-3 text-center">
//         <img src={load} alt="loading" className="w-100" />
//       </div>
//     );
//   } else if (loading) {
//     return (
//       <div className="container mt-3 text-center">
//         {/* Display a loading indicator during subsequent updates */}
//         Loading...
//       </div>
//     );
//   } else if (product?.length === 0) {
//     return (
//       <div className="container mt-3 rounded-5 w-25 bg-info p-3">
//         <p className="text-center text-dark  display-5 text-white ">
//           No Products...
//         </p>
//       </div>
//     );
//   } else {
//     return (
//       <div className="container mt-3">
//         <article id="product-panel" className="col-md-5">
//           {product.map((products) => (
//             <ProductCard
//               key={products.id}
//               product={products}
//               getProduct={getProduct}
//               quantityMinus={quantityMinus}
//               quantityPlus={quantityPlus}
//               handleRemove={handleRemove}
//             />
//           ))}
//         </article>
//         <article className="col-md-5 m-3">
//           <CardTotal product={product} />
//         </article>
//       </div>
//     );
//   }
// };

// export default ProductList;
