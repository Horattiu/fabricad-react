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
                onClick={() => {
                  setCartItems(
                    cartItems
                      .map((cartItem) => {
                        if (cartItem.id === produs.id) {
                          return {
                            ...cartItem,
                            numarProduse: cartItem.numarProduse - 1,
                          };
                        } else {
                          return cartItem;
                        }
                      })
                      .filter((cartItem) => cartItem.numarProduse !== 0)
                  );
                }}
              >
                -
              </button>
              {cartItems.find((item) => item.id === produs.id).numarProduse}
              <button
                onClick={() => {
                  setCartItems(
                    cartItems.map((cartItem) => {
                      if (cartItem.id === produs.id) {
                        return {
                          ...cartItem,
                          numarProduse: cartItem.numarProduse + 1,
                        };
                      } else {
                        return cartItem;
                      }
                    })
                  );
                }}
              >
                +
              </button>
            </div>
            <span className=" cart-pret">{produs.pret}</span>
          </div>
        ))}
        <div className="cart-total">
          total
          {cartItems.reduce((total, cartItem) => {
            total += cartItem.pret;
            return total;
          }, 0)}
        </div>
      </div>
      <div onClick={() => setIsCartOpen(false)} className="cart-close">
        x
      </div>
    </div>
  ) : null;
}

export default ShoppingCart;
