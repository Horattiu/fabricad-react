import "./shoppingcart.css";
import React from "react";

function ShoppingCart({ isCartOpen, setIsCartOpen, cartItems, setCartItems }) {
  return isCartOpen ? (
    <div className="modal">
      {" "}
      red
      <div className="cart-container">
        {cartItems.map((produs) => (
          <div className="cart-content" key={produs.id}>
            <button
              onClick={() =>
                setCartItems(() =>
                  cartItems.filter((cartItem) => cartItem.id !== produs.id)
                )
              }
            >
              -
            </button>
            (CANTITATE)
            <button onClick={() => setCartItems([...cartItems, produs])}>
              +
            </button>{" "}
            <span className="cart-content"> {produs.pret}</span>
            <div className="cart-content">TOTAL {}</div>
            <img src={produs.imgPath}></img>
          </div>
        ))}
        <div onClick={() => setIsCartOpen(false)} className="cart-close">
          x
        </div>
      </div>
    </div>
  ) : null;
}

export default ShoppingCart;
