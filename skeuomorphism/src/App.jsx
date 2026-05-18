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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav glossy">
        <a href="#" className="nav-logo">MS</a>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hello, I'm <span className="hero-highlight">Michael Stone</span><br />
              Product Designer
            </h1>
            <p>
              I create pixel-perfect designs with realistic textures and depth that feel 
              tangible and intuitive. Every detail matters in crafting exceptional user experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                View Portfolio
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-device">
            <div className="device-screen">
              ??
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title fade-in">What I Do</h2>
          <div className="skills-grid fade-in">
            <div className="skill-card neumorphic">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">UI Design</h3>
            </div>
            <div className="skill-card neumorphic">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">Prototyping</h3>
            </div>
            <div className="skill-card neumorphic">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">Development</h3>
            </div>
            <div className="skill-card neumorphic">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">User Research</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title fade-in">Featured Work</h2>
          <div className="projects-grid fade-in">
            <div className="project-card neumorphic">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">Finance App</h3>
                <p className="project-description">
                  A comprehensive financial management app with realistic UI elements and intuitive controls.
                </p>
                <div className="project-tags">
                  <span className="tag">iOS</span>
                  <span className="tag">Finance</span>
                  <span className="tag">UI/UX</span>
                </div>
              </div>
            </div>
            <div className="project-card neumorphic">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">Music Player</h3>
                <p className="project-description">
                  Skeuomorphic music player design inspired by classic hardware interfaces.
                </p>
                <div className="project-tags">
                  <span className="tag">Mobile</span>
                  <span className="tag">Music</span>
                  <span className="tag">Design</span>
                </div>
              </div>
            </div>
            <div className="project-card neumorphic">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">Control Panel</h3>
                <p className="project-description">
                  Dashboard design with realistic switches, dials, and tactile interactions.
                </p>
                <div className="project-tags">
                  <span className="tag">Web</span>
                  <span className="tag">Dashboard</span>
                  <span className="tag">3D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content glossy">
            <h2 className="section-title fade-in">Let's Create Together</h2>
            <p className="fade-in">
              Have a project in mind? I'd love to bring your ideas to life with 
              beautiful, functional design.
            </p>
            <div className="contact-buttons fade-in">
              <a href="mailto:michael@stone.design" className="btn btn-primary">
                Send Email
              </a>
              <a href="#" className="btn btn-secondary">
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
