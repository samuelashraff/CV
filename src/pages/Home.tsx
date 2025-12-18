import "../styles/base.css";
import photo from "../assets/CV_Photo_2.png";
import Skills from "../components/Skills";
import About from "../components/About";
import Links from "../components/Links";

export default function Home() {
  return (
    <div className="main-container centered">
        <div className="home-header">
            <img src={photo} alt="Samuel Ashraff" style={{width: 140, height: 140, borderRadius: "50%", objectFit: "cover"}}/>
            <h1>Hi! I'm Samuel Ashraff</h1>
        </div>
        <h2>Full-Stack Developer with over 4+ years of experience</h2>
        <section className="about-me-section">
            <About />
        </section>
        <div className="skills-layout">
            <Skills />
        </div>
        <Links />
    </div>
  );
}
