import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./produs.css";

const Produs = ({ produse, setCartItems, cartItems }) => {
  const produsId = useParams().id;
  // console.log(produsId);
  // console.log(useParams());
  // console.log(window.location);

  // const produs = produse.filter((prod) => prod.id === produsId);

  const produs = produse.find((prod) => prod.id === Number(produsId));

  // console.log(cartItems);

  return (
    <>
      <div class="wrap-container">
        <div id="picture_box" class="picture-box">
          <img src={produs.imgPath} alt="" class="" />
        </div>

        <div class="details">
          <h1>{produs.nume}</h1>
          <h2>{produs.pret}</h2>
          <h3>{produs.material}</h3>
          <h4>{produs.dimensiuni}</h4>
          <button
            onClick={() => {
              if (cartItems.length === 0) {
                setCartItems([...cartItems, produs]);
                return;
              }

              const item = cartItems.find(
                (cartItem) => cartItem.id === produs.id
              );

              if (!cartItems.includes(item)) {
                console.log("produs nou adaugat");
                return setCartItems([...cartItems, produs]);
              }

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
            add to card
          </button>
        </div>
      </div>

      <div class="container_box">
        <div id="box_1" class="box">
          <img src="" alt="" class="src" />
        </div>

        <div id="box-2" class="box">
          <img src="" alt="" class="src" />
        </div>

        <div id="box-3" class="box">
          <img src="" alt="" class="src" />
        </div>
      </div>
    </>
  );
};

export default Produs;
