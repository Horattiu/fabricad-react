import { useLocation, useNavigate } from "react-router-dom";
import "./produse.css";

const Produse = () => {
  const navigate = useNavigate();

  const location = useLocation().pathname;
  console.log(location);

  // console.log(window.location.pathname);

  const goToRoute = (produsId) =>
    location === "/produse"
      ? navigate(`${produsId}`)
      : navigate(`produse/${produsId}`);
  return (
    <>
      <div className="background-container">
        <div class="products-title">
          <span>PRODUCTS</span>
        </div>
        <div class="main-container">
          <div
            class="product-container"
            onClick={() => goToRoute("1")}
            style={{ cursor: "pointer" }}
          >
            <div class="card-container">
              <div class="product-img">
                <img src={require("../img/img4.jpg")} class="prod" />
              </div>
              <div class="product-name">
                <h3>Lorem, ipsum.</h3>
              </div>
              <div class="product-price">
                <h3>500 lei</h3>
              </div>
            </div>
          </div>

          <div
            class="product-container"
            onClick={() => goToRoute("2")}
            style={{ cursor: "pointer" }}
          >
            <div class="card-container">
              <div class="product-img">
                <img src={require("../img/img8.jpg")} class="prod" />
              </div>
              <div class="product-name">
                <h3>Lorem, ipsum.</h3>
              </div>
              <div class="product-price">
                <h3>900 lei</h3>
              </div>
            </div>
          </div>

          <div
            class="product-container"
            onClick={() => goToRoute("3")}
            style={{ cursor: "pointer" }}
          >
            <div class="card-container">
              <div class="product-img">
                <img src={require("../img/img2.jpg")} class="prod" />
              </div>
              <div class="product-name">
                <h3>Lorem, ipsum.</h3>
              </div>
              <div class="product-price">
                <h3>202 lei</h3>
              </div>
            </div>
          </div>
          <div
            class="product-container"
            onClick={() => goToRoute("4")}
            style={{ cursor: "pointer" }}
          >
            <div class="card-container">
              <div class="product-img">
                <img src={require("../img/img6.jpg")} class="prod" />
              </div>
              <div class="product-name">
                <h3>Lorem, ipsum.</h3>
              </div>
              <div class="product-price">
                <h3>600 lei</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Produse;
