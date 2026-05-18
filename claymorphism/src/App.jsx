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
      <nav className="nav clay">
        <a href="#" className="nav-logo">ER</a>
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
            <span className="hero-badge">
              ? Brand Designer
            </span>
            <h1>
              Hi! I'm <span className="hero-highlight">Emma Rodriguez</span><br />
              Creating Playful Brands
            </h1>
            <p>
              I design soft, friendly, and memorable brand identities that feel warm 
              and approachable. Let's make something delightful together!
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                See My Work
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-shape">
            ??
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title fade-in">What I Offer</h2>
          <div className="skills-grid fade-in">
            <div className="skill-card">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">Brand Identity</h3>
            </div>
            <div className="skill-card">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">Logo Design</h3>
            </div>
            <div className="skill-card">
              <span className="skill-icon">???</span>
              <h3 className="skill-name">Illustrations</h3>
            </div>
            <div className="skill-card">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">Packaging</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title fade-in">Featured Projects</h2>
          <div className="projects-grid fade-in">
            <div className="project-card clay-raised">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">Sweet Bakery</h3>
                <p className="project-description">
                  Playful brand identity for an artisan bakery featuring soft pastel colors and friendly typography.
                </p>
                <div className="project-tags">
                  <span className="tag">Branding</span>
                  <span className="tag">Food</span>
                  <span className="tag">Pastel</span>
                </div>
              </div>
            </div>
            <div className="project-card clay-raised">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">Bloom Studio</h3>
                <p className="project-description">
                  Wellness brand with soft, organic shapes and calming color palette for meditation app.
                </p>
                <div className="project-tags">
                  <span className="tag">App</span>
                  <span className="tag">Wellness</span>
                  <span className="tag">Soft UI</span>
                </div>
              </div>
            </div>
            <div className="project-card clay-raised">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">Cloud Kids</h3>
                <p className="project-description">
                  Children's clothing brand with puffy, cloud-like elements and cheerful aesthetics.
                </p>
                <div className="project-tags">
                  <span className="tag">Kids</span>
                  <span className="tag">Fashion</span>
                  <span className="tag">Playful</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content clay">
            <h2 className="section-title fade-in">Let's Collaborate!</h2>
            <p className="fade-in">
              Ready to create something amazing? I'd love to help bring your brand vision to life 
              with soft, friendly design that resonates with your audience.
            </p>
            <div className="contact-buttons fade-in">
              <a href="mailto:hello@emmarodriguez.com" className="btn btn-primary">
                Say Hello
              </a>
              <a href="#" className="btn btn-secondary">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
