import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  
  return (
    <div className=" app">
      <Navbar />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/newproduct"
          element={<NewProduct/>}
        />
        <Route
          path="/productlist"
          element={<ProductList  />}
        />
      </Routes>
    </div>
  );
}

export default App;
