import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        color: "white",
        padding: "1rem",
        alignItems: "center",
        justifyContent: "flex-start",
        display: "flex",
        backgroundColor: "#6A7B7C",
      }}
    >
      <div>
        <h3>Shopping Cart</h3>
      </div>
      <div className="ms-3 d-flex g-2">
        <NavLink className="nav-link me-2" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link me-2" to="/newproduct">
          New Product
        </NavLink>
        <NavLink className="nav-link me-2" to="/productlist">
          Product List
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
