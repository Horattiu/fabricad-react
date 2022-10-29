import "./navbar.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

const Navbar = () => {
  const [IsOpenn, setIsOpenn] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <h1 style={{ cursor: "pointer" }}>fabricad</h1>
      </Link>

      <div className="links">
        <Link to="/despre">despre</Link>
        <Link to="/produse">produse</Link>
        <Link to="/proiecte">proiecte</Link>
        <Link to="/">
          <FiShoppingCart
            // isOpenn={isOpenn}
            // setIsOpenn={setIsOpenn}
            onClick={() => setIsOpenn(false)}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
