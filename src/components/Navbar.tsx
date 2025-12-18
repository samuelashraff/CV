import { Link } from "react-router-dom";
import "../styles/base.css";

export default function Navbar() {
  return (
    <header className="navbar-centered">
      <nav className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/experience" className="navbar-link">Experience</Link>
        <Link to="/education" className="navbar-link">Education</Link>
      </nav>
    </header>
  );
}
