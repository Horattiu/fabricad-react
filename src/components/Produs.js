import { useParams } from "react-router-dom";
// import Navbar from "./Navbar";
// import Navbar from "./components/Navbar";
import "./produs.css";

const Produs = ({ produse, setCartItems, cartItems }) => {
  const produsId = useParams().id;

  const produs = produse.find((prod) => prod.id === Number(produsId));

  const handleAddToCart = () => {
    const itemToBeAddedToCart = cartItems.find(
      (cartItem) => cartItem.id === produs.id
    );

    if (cartItems.length === 0) {
      setCartItems([...cartItems, produs]);
      return;
    }

    if (!cartItems.includes(itemToBeAddedToCart)) {
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
  };

  return (
    <>
      <div class="wrap-container">
        <div id="picture_box" class="picture-box">
          <img src={produs.imgPath} alt="" class="" />
        </div>

        <div class="details">
          <h1>{produs.nume}</h1>
          <hr />
          <h2>{produs.material}</h2>
          <h3>size: {produs.dimensiuni}</h3>
          <h4>{produs.pret} lei</h4>
          <button onClick={handleAddToCart}>ADD TO CART</button>
        </div>
      </div>

      {/* <div class="container_box">
        <div id="box_1" class="box">
          <img src="" alt="" class="src" />
        </div>

        <div id="box-2" class="box">
          <img src="" alt="" class="src" />
        </div>

        <div id="box-3" class="box">
          <img src="" alt="" class="src" />
        </div>
      </div> */}
    </>
  );
};

export default Produs;
