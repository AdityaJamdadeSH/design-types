import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
        <div className="mesh-blob blob-3"></div>
        <div className="mesh-blob blob-4"></div>
      </div>

      {/* Navigation */}
      <nav className="nav liquid-glass">
        <a href="#" className="nav-logo">NC</a>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="badge-pulse"></span>
            Digital Artist & Creator
          </span>
          <h1>
            I'm <span className="hero-gradient-text">Nova Chen</span><br />
            Designing The Future
          </h1>
          <p>
            Creating fluid, mesmerizing digital experiences that blend art and technology. 
            Every project is a journey into the extraordinary.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              Explore Work
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Let's Connect
            </a>
          </div>
          <div className="hero-visual liquid-glass">
            ?
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title fade-in">Expertise</h2>
          <div className="skills-grid fade-in">
            <div className="skill-card liquid-glass">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">3D Design</h3>
            </div>
            <div className="skill-card liquid-glass">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">Motion Graphics</h3>
            </div>
            <div className="skill-card liquid-glass">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">Visual Effects</h3>
            </div>
            <div className="skill-card liquid-glass">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">Animation</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title fade-in">Featured Work</h2>
          <div className="projects-grid fade-in">
            <div className="project-card liquid-glass">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">Cosmic Dreams</h3>
                <p className="project-description">
                  Immersive 3D experience featuring fluid animations and gradient meshes inspired by cosmic phenomena.
                </p>
                <div className="project-tags">
                  <span className="tag">3D</span>
                  <span className="tag">WebGL</span>
                  <span className="tag">Interactive</span>
                </div>
              </div>
            </div>
            <div className="project-card liquid-glass">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">Crystal Vision</h3>
                <p className="project-description">
                  Brand identity with liquid glass aesthetics and flowing color transitions for tech startup.
                </p>
                <div className="project-tags">
                  <span className="tag">Branding</span>
                  <span className="tag">Motion</span>
                  <span className="tag">Gradient</span>
                </div>
              </div>
            </div>
            <div className="project-card liquid-glass">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">Prism Collection</h3>
                <p className="project-description">
                  NFT art series exploring light refraction and color theory through digital glass sculptures.
                </p>
                <div className="project-tags">
                  <span className="tag">NFT</span>
                  <span className="tag">Art</span>
                  <span className="tag">Digital</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content liquid-glass">
            <h2 className="section-title fade-in">Start A Project</h2>
            <p className="fade-in">
              Ready to create something extraordinary? Let's collaborate and bring your 
              vision to life with stunning visuals and innovative design.
            </p>
            <div className="contact-buttons fade-in">
              <a href="mailto:nova@chen.art" className="btn btn-primary">
                Send Message
              </a>
              <a href="#" className="btn btn-secondary">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
