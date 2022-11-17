import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import React from "react";

const MobileNavLinks = ({ setIsCartOpen, closeMobileMenu, isMobile }) => {
  return (
    <div className="links-mobile">
      <Link to="/despre" onClick={() => isMobile && closeMobileMenu()}>
        DESPRE
      </Link>
      <Link to="/produse" onClick={() => isMobile && closeMobileMenu()}>
        PRODUSE
      </Link>
      <Link to="/proiecte" onClick={() => isMobile && closeMobileMenu()}>
        PROIECTE
      </Link>
      <div onClick={() => setIsCartOpen(true)}>
        COS DE CUMPARATURI
        <FiShoppingCart className="cart-icon" />
      </div>
    </div>
  );
};

export default MobileNavLinks;
