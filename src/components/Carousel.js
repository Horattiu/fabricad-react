import React from "react";
import "./carousel.css";

const Carousel = () => {
  let i = 0; // current slide
  let j = 4; //total slides

  const dots = document.querySelectorAll(".dot-container button");

  const images = document.querySelectorAll(".image-container img");

  function next() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i + 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
  }

  function prev() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
  }

  function indicator(num) {
    dots.forEach(function (dot) {
      dot.style.backgroundColor = "transparent";
    });

    document.querySelector(
      ".dot-container button:nth-child(" + num + ")"
    ).style.backgroundColor = "#ffff";
  }

  function dot(index) {
    images.forEach(function (image) {
      image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
  }

  return (
    <div class="container">
      <picture class="image-container">
        <img
          src={require("../img/pic1.jpg")}
          id="content1"
          class="background active"
        />
        <img
          src={require("../img/pic2.jpg")}
          id="content2"
          class="background"
        />
        <img
          src={require("../img/pic3.jpg")}
          id="content3"
          class="background"
        />
        <img
          src={require("../img/pic4.jpg")}
          id="content4"
          class="background"
        />
      </picture>

      <div class="slide-text">
        <h1>mobilier</h1>
        <h2>debitari CNC, proiectare 3D</h2>
      </div>

      <div class="dot-container">
        <button onClick={() => dot(1)}></button>
        <button onClick={() => dot(2)}></button>
        <button onClick={() => dot(3)}></button>
        <button onClick={() => dot(4)}></button>
      </div>

      <button id="prev" onClick={() => prev()}>
        &larr;
      </button>
      <button id="next" onClick={() => next()}>
        &rarr;
      </button>
    </div>
  );
};

export default Carousel;
