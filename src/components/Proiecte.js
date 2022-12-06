import "./proiecte.css";
import FullScreenImage from "./FullScreenImage";
import { useState } from "react";

const Proiecte = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  console.log(currentImage);

  return (
    <section>
      <div class="projects-title">
        <span>PROJECTS</span>
      </div>
      <FullScreenImage
        imageSrc={currentImage}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div class="work-container" data-aos="fade-up" data-aos-offset="180">
        <div class="work-list">

          <figure
            onClick={() => {
              setIsOpen(true);
              setCurrentImage(require("../img/img1.jpg"));
            }}
            class="item-container"
          >
            <img class="work-item" src={require("../img/img1.jpg")} alt="" />
          </figure>
          <figure
            onClick={() => setCurrentImage("../img/img2.jpg")}
            class="item-container"
          >
            <img class="work-item" src={require("../img/img2.jpg")} alt="" />
          </figure>
          <figure
            onClick={() => setCurrentImage("../img/img3.jpg")}
            class="item-container"
          >
            <img class="work-item" src={require("../img/img3.jpg")} alt="" />
          </figure>
          <figure
            onClick={() => setCurrentImage("../img/img4.jpg")}
            class="item-container"
          >
            <img class="work-item" src={require("../img/img4.jpg")} alt="" />
          </figure>
          <figure
            onClick={() => setCurrentImage("../img/img5.jpg")}
            class="item-container"
          >
            <img class="work-item" src={require("../img/img5.jpg")} alt="" />
          </figure>
          <figure
            onClick={() => setCurrentImage("../img/img6.jpg")}
            class="item-container"
          >
            <img class="work-item" src={require("../img/img6.jpg")} alt="" />
          </figure>
          <figure
            onClick={() => setCurrentImage("../img/img7.jpg")}
            class="item-container"
          >
            <img class="work-item" src={require("../img/img7.jpg")} alt="" />
          </figure>
          <figure
            onClick={() => setCurrentImage("../img/img8.jpg")}
            class="item-container"
          >
            <img class="work-item" src={require("../img/img8.jpg")} alt="" />
          </figure>
          <figure
            onClick={() => setCurrentImage("../img/img9.jpg")}
            class="item-container"
          >
            <img class="work-item" src={require("../img/img9.jpg")} alt="" />
          </figure>
        </div>

        {/* <div class="see-more">
          <a href="projects.html" class="">
            {" "}
            mai multe imagini
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Proiecte;
