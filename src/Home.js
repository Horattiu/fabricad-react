import Produse from "./components/Produse";
import Proiecte from "./components/Proiecte";
import Footer from "./components/Footer";
import Vid from "./components/Video";

const Home = () => {
  return (
    <div className="home">
      <Vid autoPlay muted="true" loop />
      <Produse />
      <Proiecte />
      <Footer />
    </div>
  );
};

export default Home;
