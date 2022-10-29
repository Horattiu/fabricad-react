import Navbar from "./components/Navbar";
import Produse from "./components/Produse";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Proiecte from "./components/Proiecte";
import Produs from "./components/Produs";
import { useEffect, useState } from "react";
import FullScreenImage from "./components/FullScreenImage";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [isOpenn, setIsOpenn] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const [produse, setProduse] = useState([
    {
      id: 1,
      nume: "Produs1",
      pret: "500 lei",
      material: "material: plywood",
      dimensiuni: "20 x 80cm",

      imgPath: require("../src/img/img4.jpg"),
    },

    {
      id: 2,
      nume: "Produs2",
      pret: "900 lei",
      material: "material: plywood",
      dimensiuni: "50 x 90cm",
      imgPath: require("../src/img/img8.jpg"),
    },
    {
      id: 3,
      nume: "Produs3",
      pret: "202 lei",
      material: "material: plywood",
      dimensiuni: "50 x 140cm",

      imgPath: require("../src/img/img2.jpg"),
    },
    {
      id: 4,
      nume: "Produs4",
      pret: "600 lei",
      material: "material: plywood",
      dimensiuni: "200 x 90cm",

      imgPath: require("../src/img/img6.jpg"),
    },
  ]);

  // useEffect(() => {}, [carItems]);

  return (
    <div className="App">
      <ShoppingCart isOpenn={isOpenn} setIsOpenn={setIsOpenn} />
      <Navbar />
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
