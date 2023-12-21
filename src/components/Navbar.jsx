import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navstyle" className="nav  align-items-center">
      <div className="container-fluid d-flex justify-content-start align-items-center">
        <div>
          <Link id="navTitle" className="navbar-brand  " to="/">
            TOYS'LAND
          </Link>
        </div>

        <div>
          <ul
            className="d-flex flex-column flex-sm-row "
            style={{ listStyle: "none" }}
          >
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newproduct">
                New-Toy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productlist">
                Toys-List
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
