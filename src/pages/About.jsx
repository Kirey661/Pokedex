import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-container">
      <div className="trainer-card">
        
        <div className="card-header">
          <h1>TRAINER</h1>
        </div>

        <div className="card-sub-header">
          <span className="trainer-name">Kirey Pérez</span>
          <span className="trainer-hp">50 HP</span>
        </div>

        <div className="avatar-section">
          <img src="/avatar.png" alt="Trainer Avatar" />
        </div>

        <div className="info-section">
          <div className="bolt top-left"></div>
          <div className="bolt top-right"></div>
          
          <p><strong>Dev Type:</strong> Frontend</p>
          <p><strong>Skill:</strong> HTML, CSS, JavaScript (sometimes)</p>
          <p><strong>Weakness:</strong> Bugs</p>
          
          <div className="bolt bottom-left"></div>
          <div className="bolt bottom-right"></div>
        </div>

      </div>

      <Link to="/" className="back-btn">← BACK TO HOME</Link>
    </div>
  );
}
export default About;