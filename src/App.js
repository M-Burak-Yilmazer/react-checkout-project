import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    axios(process.env.REACT_APP_URL)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(product);
  return (
    <div className=" app">
      <Navbar />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/newproduct"
          element={<NewProduct getProduct={getProduct} />}
        />
        <Route
          path="/productlist"
          element={<ProductList product={product} />}
        />
      </Routes>
    </div>
  );
}

export default App;
