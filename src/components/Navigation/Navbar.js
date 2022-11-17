import "./navbar.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

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
      <div className="navbar-desktop ">
        <Link to="/">
          <h1 style={{ cursor: "pointer" }}>fabricad</h1>
        </Link>

        <div className="links">
          <Link to="/despre">despre</Link>
          <Link to="/produse">produse</Link>
          <Link to="/proiecte">proiecte</Link>
          <div onClick={() => setIsCartOpen(true)}>
            <FiShoppingCart className="cart-icon" />
          </div>
        </div>
      </div>
      <MobileNav setIsCartOpen={setIsCartOpen} />
    </nav>
  );
};

export default Navbar;
