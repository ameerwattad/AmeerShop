// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Authentication from "../pages/authentication"; // Correct the path
import "./navbar.css";

export const Navbar = () => {
  const [showAuthentication, setShowAuthentication] = useState(false);

  const toggleAuthentication = () => {
    setShowAuthentication(!showAuthentication);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <button onClick={toggleAuthentication}>Register/Login</button>
      </div>

      {showAuthentication && <Authentication />}
    </div>
  );
};
