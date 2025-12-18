import "../styles/base.css";
import photo from "../assets/CV_Photo_2.png";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="main-container centered">
        <div className="home-header">
            <img src={photo} alt="Samuel Ashraff" style={{width: 140, height: 140, borderRadius: "50%", objectFit: "cover"}}/>
            <h1>Hi! I'm Samuel Ashraff</h1>
        </div>
        <h2>Full-Stack Developer with over 4+ years of experience</h2>
        <section className="about-me-section">
            <h3>About Me</h3>
            <p>
                I'm a Software Developer with over 4 years of combined part-time and full-time experience in full-stack, 
                backend, and test automation development.
            </p>

            <p>
                I hold a Master of Technology in Computer Science from Aalto University, 
                where I specialized in Web Technologies, Applications, and Science. 
                My Master's Thesis centered on Automatic Speech Recognition (ASR) technologies, 
                explored state-of-the-art ASR advancements and practical applications through ASR model fine-tuning and creation. 
            </p>

            <p>
                At my most recent role at Profium, I started off in a trainee role developing automated testing features using Robot Framework. 
                I then moved onto a full-stack developer role in an Agile and TDD environment, 
                using React.js, Java (Spring & Spring Boot), Jenkins CI/CD pipelines, 
                and GitHub based workflows to deliver integrated end-to-end features. 
                There I served as the primary technical point of contact for several customer projects in a high-ownership role, 
                responding to production incidents and developing end-to-end features from architecture to deployment, 
                while also gaining experience refactoring and debugging complex legacy codebases.
            </p>

            <p>
                Beyond my professional work, I’ve developed several academic and personal projects using Python, 
                TypeScript, Node.js, Docker, Redis, and GraphQL, further strengthening my technological foundation.
            </p>

        </section>
        <div className="skills-layout">
            <Skills />
        </div>
    </div>
  );
}
