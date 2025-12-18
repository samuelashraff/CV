import githubLogo from "../assets/github-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";
import "../styles/base.css";

export default function Links() {

    return (
        <div className="social-links">
          <a href="https://github.com/samuelashraff" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#222' }}>
            <img src={githubLogo} alt="GitHub" style={{ width: 32, height: 32 }} />
            <span style={{ fontWeight: 500, fontSize: '1.1rem' }}>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/samuel-ashraff-8ba219172/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#222' }}>
            <img src={linkedinLogo} alt="LinkedIn" style={{ width: 32, height: 32 }} />
            <span style={{ fontWeight: 500, fontSize: '1.1rem' }}>LinkedIn</span>
          </a>
        </div>
    );
}