import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-secondary bg-opacity-75 bg-body-tertiary">
      <div className="container-fluid">
        <NavLink  className="navbar-brand text-white" to="/">
          Shopping Cart
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse w-full text-end navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newproduct">
                New Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productlist">
                Product List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <div
    //   style={{
    //     color: "white",
    //     padding: "1rem",
    //     alignItems: "center",
    //     justifyContent: "flex-start",
    //     display: "flex",
    //     backgroundColor: "#6A7B7C",
    //   }}
    // >
    //   <div>
    //     <h3>Shopping Cart</h3>
    //   </div>
    //   <div className="ms-3 d-flex g-2">
    //     <NavLink className="nav-link me-2" to="/">
    //       Home
    //     </NavLink>
    //     <NavLink className="nav-link me-2" to="/newproduct">
    //       New Product
    //     </NavLink>
    //     <NavLink className="nav-link me-2" to="/productlist">
    //       Product List
    //     </NavLink>
    //     <NavLink className="nav-link" to="/about">
    //       About
    //     </NavLink>
    //   </div>
    // </div>
  );
};

export default Navbar;
