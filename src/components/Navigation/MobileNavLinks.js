import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import React from "react";

const MobileNavLinks = ({ setIsCartOpen, props }) => {
  return (
    <div className="links-mobile">
      <Link
        to="/despre"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        DESPRE
      </Link>
      <Link
        to="/produse"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        PRODUSE
      </Link>
      <Link
        to="/proiecte"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        PROIECTE
      </Link>
      <div onClick={() => setIsCartOpen(true)}>
        <FiShoppingCart className="cart-icon" />
      </div>
    </div>
  );
};

export default MobileNavLinks;
