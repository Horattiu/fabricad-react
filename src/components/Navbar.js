import "./navbar.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

const Navbar = ({ setIsCartOpen }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 style={{ cursor: "pointer" }}>fabricad</h1>
      </Link>

      <div className="links">
        <Link to="/despre">despre</Link>
        <Link to="/produse">produse</Link>
        <Link to="/proiecte">proiecte</Link>
        <div onClick={() => setIsCartOpen(true)}>
          <FiShoppingCart
          // isOpenn={isOpenn}
          // setIsOpenn={setIsOpenn}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
