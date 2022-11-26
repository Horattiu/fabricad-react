import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import React from "react";

const MobileNavLinks = ({ setIsCartOpen, closeMobileMenu, isMobile }) => {
  return (
    <div className="mobile-modal">
      <div className="links-mobile">
        <Link to="/despre" onClick={() => isMobile && closeMobileMenu()}>
          despre
        </Link>
        <Link to="/produse" onClick={() => isMobile && closeMobileMenu()}>
          produse
        </Link>
        <Link to="/proiecte" onClick={() => isMobile && closeMobileMenu()}>
          proiecte
        </Link>
        <div onClick={() => setIsCartOpen(true)}>
          <FiShoppingCart className="cart-icon" />
        </div>
      </div>
    </div>
  );
};

export default MobileNavLinks;
