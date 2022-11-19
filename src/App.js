import Navbar from "./components/Navigation/Navbar";
import Produse from "./components/Produse";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Proiecte from "./components/Proiecte";
import Produs from "./components/Produs";
import { useEffect, useState } from "react";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [produse, setProduse] = useState([
    {
      id: 1,
      nume: "Produs1",
      pret: 500,
      material: "material: plywood",
      dimensiuni: "20 x 80cm",

      imgPath: require("../src/img/img4.jpg"),
      numarProduse: 1,
    },

    {
      id: 2,
      nume: "Produs2",
      pret: 900,
      material: "material: plywood",
      dimensiuni: "50 x 90cm",
      imgPath: require("../src/img/img8.jpg"),
      numarProduse: 1,
    },
    {
      id: 3,
      nume: "Produs3",
      pret: 200,
      material: "material: plywood",
      dimensiuni: "50 x 140cm",

      imgPath: require("../src/img/img2.jpg"),
      numarProduse: 1,
    },
    {
      id: 4,
      nume: "Produs4",
      pret: 600,
      material: "material: plywood",
      dimensiuni: "200 x 90cm",

      imgPath: require("../src/img/img6.jpg"),
      numarProduse: 1,
    },
  ]);

  // useEffect(() => {}, [carItems]);

  return (
    <div className="App">
      <ShoppingCart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Navbar setIsCartOpen={setIsCartOpen} />
      <Routes>
        <Route path="produse" element={<Produse />} />
        <Route path="proiecte" element={<Proiecte />} />
        <Route path="/" element={<Home />} />
        <Route
          path="produse/:id"
          element={
            <Produs
              produse={produse}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
