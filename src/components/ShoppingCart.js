import "./shoppingcart.css";
import React from "react";

function ShoppingCart({ isCartOpen, setIsCartOpen }) {
  console.log(isCartOpen);
  return isCartOpen ? (
    <div className="modal">
      {" "}
      red
      <div className="cart-container">
        <div className="cart-content">
          (ARTICOL)<button>-</button>(CANTITATE)<button>+</button>(PRET)
          <div className="cart-content">TOTAL (PRET)</div>
        </div>
        <div onClick={() => setIsCartOpen(false)} className="cart-close">
          x
        </div>
      </div>
    </div>
  ) : null;
}

export default ShoppingCart;
