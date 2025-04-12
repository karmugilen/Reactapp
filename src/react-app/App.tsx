// src/App.tsx

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className={`about-me ${theme}`}>
      <button 
        onClick={toggleTheme} 
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      
      <header className="profile-header">
        <div className="profile-image-container">
          <img 
            src="/profile-placeholder.jpg" 
            alt="Profile" 
            className="profile-image"
            loading="lazy"
          />
        </div>
        <h1 className="name-title">Your Name</h1>
        <p className="title">Software Developer</p>
        <div className="tags">
          <span className="tag">Frontend</span>
          <span className="tag">Backend</span>
          <span className="tag">Cloud</span>
        </div>
      </header>
      
      <section className="bio-section">
        <h2>About Me</h2>
        <p className="bio-text">
          Hello! I'm a passionate software developer with expertise in modern web technologies.
          I love building efficient, scalable applications and solving complex problems.
        </p>
        
        <div className={`additional-info ${showMore ? 'expanded' : ''}`}>
          {showMore && (
            <>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Frontend</h3>
                  <div className="skill-items">
                    <span className="skill-item">React</span>
                    <span className="skill-item">TypeScript</span>
                    <span className="skill-item">CSS/SASS</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Backend</h3>
                  <div className="skill-items">
                    <span className="skill-item">Node.js</span>
                    <span className="skill-item">Express</span>
                    <span className="skill-item">API Design</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Cloud</h3>
                  <div className="skill-items">
                    <span className="skill-item">Cloudflare Workers</span>
                    <span className="skill-item">Serverless</span>
                    <span className="skill-item">CI/CD</span>
                  </div>
                </div>
              </div>
              <div className="experience-section">
                <h3>Experience</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-date">2020 - Present</div>
                    <div className="timeline-content">
                      <h4>Senior Developer</h4>
                      <p>Leading development of modern web applications...</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">2018 - 2020</div>
                    <div className="timeline-content">
                      <h4>Web Developer</h4>
                      <p>Building responsive and accessible web interfaces...</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        <button 
          onClick={() => setShowMore(!showMore)}
          className="show-more-btn"
          aria-expanded={showMore}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github">
            <span className="icon">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            <span className="icon">LinkedIn</span>
          </a>
          <a href="mailto:your.email@example.com" className="social-link email">
            <span className="icon">Email</span>
          </a>
        </div>
      </section>
      
      <footer className="page-footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
