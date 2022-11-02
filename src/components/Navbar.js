import "./navbar.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from "react";

const Navbar = ({ setIsCartOpen }) => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className={`${sticky ? " sticky" : ""}`}>
      <div className="navbar">
        <Link to="/">
          <h1 style={{ cursor: "pointer" }}>fabricad</h1>
        </Link>

        <div className="links">
          <Link to="/despre">DESPRE</Link>
          <Link to="/produse">PRODUSE</Link>
          <Link to="/proiecte">PROIECTE</Link>
          <div onClick={() => setIsCartOpen(true)}>
            <FiShoppingCart
              className="cart-icon"
              // isOpenn={isOpenn}
              // setIsOpenn={setIsOpenn}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
