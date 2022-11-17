import React from "react";
import "./mobilenav.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = ({ setIsCartOpen }) => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound
      className="hamburger"
      size="40px"
      onClick={() => setOpen(!open)}
      // onClick={() => console.log("clcik")}
    />
  );

  const closeIcon = (
    <CgCloseO
      className="hamburger"
      size="40px"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <div className="navbar-mobile">
      <Link to="/">
        <h1 className="mobile-logo" style={{ cursor: "pointer" }}>
          fabricad
        </h1>
      </Link>

      {open ? closeIcon : hamburgerIcon}
      {open && (
        <MobileNavLinks
          setIsCartOpen={setIsCartOpen}
          isMobile={true}
          closeMobileMenu={closeMobileMenu}
        />
      )}
    </div>
  );
};

export default MobileNav;
