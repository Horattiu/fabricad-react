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

  console.log(cartItems);

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
          <button onClick={() => setCartItems([...cartItems, produs])}>
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
