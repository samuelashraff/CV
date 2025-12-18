import "./styles/base.css";
import "./styles/navbar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        <footer style={{textAlign: 'center', padding: '32px 0 16px 0', color: '#888', fontSize: '0.95rem'}}>
          © {new Date().getFullYear()} Samuel Ashraff — Built with React + Vite
        </footer>
      </div>
    </BrowserRouter>
  );
}

