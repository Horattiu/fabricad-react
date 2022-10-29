import "./shoppingcart.css";
import React from "react";
import { useState } from "react";

function ShoppingCart({ isOpenn, setIsOpenn }) {
  return isOpenn ? (
    <div className="cart-container">
      <div className="cart-content">
        (ARTICOL)(button-)(CANTITATE)(button+)(PRET)
      </div>
      <div className="cart-content">
        (ARTICOL)(button-)(CANTITATE)(button+)(PRET)
      </div>
      <div className="cart-content">
        (ARTICOL)(button-)(CANTITATE)(button+)(PRET)
      </div>
      <div className="cart-content">TOTAL (PRET)</div>
    </div>
  ) : null;
}

export default ShoppingCart;
