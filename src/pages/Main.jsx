import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <main className="main">
      <div>
        <h1
          style={{ color: "#ff006e", fontFamily: "Grinch", fontSize: "3rem" }}
        >
          {" "}
          Welcome to Toys'Land
        </h1>
        <div className="main-buttons">
          <button
            className="btn btn-outline-primary px-4"
            onClick={() => navigate("newproduct")}
          >
            Add New Toy
          </button>
          <button
            onClick={() => navigate("productlist")}
            className="btn btn-primary px-4 ms-3"
          >
            See Toys-Shop
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
