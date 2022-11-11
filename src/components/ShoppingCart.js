import "./shoppingcart.css";
import React from "react";

function ShoppingCart({ isCartOpen, setIsCartOpen, cartItems, setCartItems }) {
  return isCartOpen ? (
    <div className="modal">
      <div className="cart-container">
        {cartItems.map((produs) => (
          <div className="cart-content" key={produs.id}>
            <img className="cart-img" src={produs.imgPath}></img>
            <span className="cart-nume"> {produs.nume}</span>
            <div className="quantity-buttons">
              <button
                onClick={() =>
                  setCartItems(() =>
                    cartItems.filter((cartItem) => cartItem.id !== produs.id)
                  )
                }
              >
                -
              </button>
              (1)
              <button onClick={() => setCartItems([...cartItems, produs])}>
                +
              </button>
            </div>
            <span className=" cart-pret"> {produs.pret}</span>
          </div>
        ))}
        <div className=" cart-total">TOTAL {} lei</div>
        <div onClick={() => setIsCartOpen(false)} className="cart-close">
          x
        </div>
      </div>
    </div>
  ) : null;
}

export default ShoppingCart;
