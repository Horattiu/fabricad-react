import Produse from "./components/Produse";
import Proiecte from "./components/Proiecte";
import Footer from "./components/Footer";
import Vid from "./components/Video";
import ImageSlider from "./components/ImageSlider";
import { countries } from "./components/ImageSliderData"

import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
    })
  }, []);


  return (
    <div className="home">
      <ImageSlider images={countries} />
      {/* <Vid autoPlay muted="true" loop /> */}
      <Produse />
      <Proiecte />
      <Footer />
    </div>
  );
};

export default Home;
