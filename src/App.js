import { useEffect, useState } from "react";
import "./App.css";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains("dark-mode");
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="portfolio-container">
      <div className="theme-toggle">
        <button onClick={toggleDarkMode} className="theme-button">
          <span className="theme-emoji">{darkMode ? "☀️" : "🌙"}</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-profile-image">
          <img
            src="/Portfolio_website/images/protfolioImage.png"
            alt="Dror Hershcovish"
            className="profile-img"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Dror Hershcovish</h1>
          <p className="hero-subtitle">4th Year Software Engineering Student</p>
          <div className="contact-links">
            <a href="mailto:drorh473@gmail.com" className="contact-link">
              <i className="fas fa-envelope"></i>
              <span>drorh473@gmail.com</span>
            </a>
            <a href="tel:050-7570079" className="contact-link">
              <i className="fas fa-phone"></i>
              <span>050-7570079</span>
            </a>
            <a
              href="https://github.com/Drorh473"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dror-hershcovish-28813923a/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-layout">
                <div className="project-demo">
                  <video
                    className="demo-video"
                    controls
                    poster="/Portfolio_website/images/restaurant-thumbnail.jpg"
                  >
                    <source
                      src="https://drive.google.com/uc?export=download&id=1-MUQR2M-pEmnomBWe_362aeImYkj0nVU"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Restaurant Ordering System</h3>
                  <p className="project-description">
                    A comprehensive restaurant management system built with Java
                    and JavaFX that streamlines the ordering process. This
                    application features an intuitive user interface for both
                    customers and staff, real-time order tracking, and
                    integrated payment processing. The system improved order
                    accuracy by 40% and reduced wait times significantly.
                  </p>
                  <div className="project-tech">
                    <h4 className="tech-title">Key Technologies:</h4>
                    <div className="tech-icons">
                      {["java", "mysql", "junit", "git"].map((tech) => (
                        <div key={tech} className="tech-icon">
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                            alt={tech}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-layout reverse">
                <div className="project-content">
                  <h3 className="project-title">
                    Football Club Store Web Application
                  </h3>
                  <p className="project-description">
                    A full-stack e-commerce platform designed for football club
                    merchandise. The application features real-time inventory
                    management, secure payment processing, and a dynamic user
                    interface. Implemented WebSocket for live notifications and
                    concurrent booking management.
                  </p>
                  <div className="project-tech">
                    <h4 className="tech-title">Key Technologies:</h4>
                    <div className="tech-icons">
                      {[
                        "react",
                        "nodejs",
                        "mongodb",
                        "socketio",
                        "express",
                        "git",
                      ].map((tech) => (
                        <div key={tech} className="tech-icon">
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                            alt={tech}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="project-demo">
                  <video
                    className="demo-video"
                    controls
                    poster="/Portfolio_website/images/football-thumbnail.jpg"
                  >
                    <source
                      src="https://drive.google.com/uc?export=download&id=18iuyEhD3vP7q9-iAz3erVI8DzayGONFG"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-layout">
                <div className="project-demo">
                  <div className="demo-placeholder">
                    <p>Video Demo Coming Soon</p>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">
                    Real time fruit grading using data mining and machine
                    learning
                  </h3>
                  <p className="project-description">
                    Built an automated fruit grading system using computer
                    vision and deep learning to classify fruit quality in
                    real-time. The system uses ShuffleNetV2 CNN with
                    multi-camera analysis to process fruits on a conveyor belt,
                    achieving 75%+ accuracy while reducing manual inspection
                    time. Developed with Python/PyTorch, React frontend, and
                    deployed on edge devices for agricultural operations.
                  </p>
                  <div className="project-tech">
                    <h4 className="tech-title">Key Technologies:</h4>
                    <div className="tech-icons">
                      {["python", "react", "mongodb", "git"].map((tech) => (
                        <div key={tech} className="tech-icon">
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                            alt={tech}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {[
              { name: "Java", icon: "java" },
              { name: "Python", icon: "python" },
              { name: "C", icon: "c" },
              { name: "Junit", icon: "junit" },
              { name: "JavaScript", icon: "javascript" },
              { name: "React", icon: "react" },
              { name: "Node.js", icon: "nodejs" },
              { name: "HTML5", icon: "html5" },
              { name: "CSS3", icon: "css3" },
              { name: "MySQL", icon: "mysql" },
              { name: "MongoDB", icon: "mongodb" },
              { name: "Firebase", icon: "firebase" },
              { name: "Git", icon: "git" },
              { name: "PyTorch", icon: "pytorch" },
              { name: "Express", icon: "express" },
              { name: "Linux", icon: "linux" },
            ].map(({ name, icon }) => (
              <div key={name} className="skill-item">
                <div className="skill-icon">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                    alt={name}
                  />
                </div>
                <span className="skill-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Dror Hershcovish. All rights reserved.</p>
      </footer>
    </div>
  );
}
