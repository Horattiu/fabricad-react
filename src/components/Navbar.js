import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 style={{ cursor: "pointer" }}>fabricad</h1>
      </Link>

      <div className="links">
        <Link to="/despre">despre</Link>
        <Link to="/produse">produse</Link>
        <Link to="/proiecte">proiecte</Link>
      </div>
    </nav>
  );
};

export default Navbar;
