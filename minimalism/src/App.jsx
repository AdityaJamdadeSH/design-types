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
      {/* Navigation */}
      <nav className="nav">
        <a href="#" className="nav-logo">JP</a>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Architect & Designer</span>
          <h1>James Park</h1>
          <div className="hero-divider"></div>
          <p>
            Creating spaces and experiences through thoughtful design and attention to detail.
          </p>
          <div className="hero-scroll" onClick={() => scrollToSection('about')}>
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <span className="section-label fade-in">About</span>
          <h2 className="section-title fade-in">Philosophy</h2>
          <div className="about-content fade-in">
            <div className="about-text">
              <p>
                I believe in the power of simplicity. Every design should serve a purpose, 
                every element should have meaning, and nothing should be included without intention.
              </p>
              <p>
                My work focuses on creating clean, functional spaces that enhance the lives 
                of those who inhabit them. I draw inspiration from modernist principles, 
                Japanese minimalism, and Scandinavian design.
              </p>
              <p>
                With over a decade of experience, I've learned that the best designs are 
                often the simplest. Less is indeed more.
              </p>
            </div>
            <div className="about-image">
              <span>?</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <span className="section-label fade-in">Experience</span>
          <h2 className="section-title fade-in">Career</h2>
          <div className="experience-list">
            <div className="experience-item fade-in">
              <span className="experience-period">2020 — Present</span>
              <div className="experience-content">
                <h3>Lead Architect</h3>
                <p className="experience-company">Minimal Studios</p>
                <p>
                  Leading a team of designers in creating contemporary residential and 
                  commercial spaces with a focus on sustainable, minimalist design.
                </p>
              </div>
            </div>
            <div className="experience-item fade-in">
              <span className="experience-period">2016 — 2020</span>
              <div className="experience-content">
                <h3>Senior Designer</h3>
                <p className="experience-company">Zen Architecture</p>
                <p>
                  Developed award-winning residential projects incorporating biophilic 
                  design principles and minimalist aesthetics.
                </p>
              </div>
            </div>
            <div className="experience-item fade-in">
              <span className="experience-period">2012 — 2016</span>
              <div className="experience-content">
                <h3>Architect</h3>
                <p className="experience-company">Modern Design Co.</p>
                <p>
                  Worked on various commercial and residential projects, specializing 
                  in space optimization and clean design solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <span className="section-label fade-in">Selected Work</span>
          <h2 className="section-title fade-in">Projects</h2>
          <div className="projects-list">
            <div className="project-item fade-in">
              <div className="project-image">
                <span>?</span>
              </div>
              <div className="project-content">
                <span className="project-number">01</span>
                <h3 className="project-title">Zen House</h3>
                <p className="project-description">
                  A minimalist residential design incorporating natural materials and 
                  abundant natural light to create a serene living environment.
                </p>
                <a href="#" className="project-link">
                  View Project ?
                </a>
              </div>
            </div>
            <div className="project-item fade-in">
              <div className="project-image">
                <span>?</span>
              </div>
              <div className="project-content">
                <span className="project-number">02</span>
                <h3 className="project-title">Urban Loft</h3>
                <p className="project-description">
                  Contemporary loft transformation focusing on open space, clean lines, 
                  and functional design for modern city living.
                </p>
                <a href="#" className="project-link">
                  View Project ?
                </a>
              </div>
            </div>
            <div className="project-item fade-in">
              <div className="project-image">
                <span>?</span>
              </div>
              <div className="project-content">
                <span className="project-number">03</span>
                <h3 className="project-title">Minimal Office</h3>
                <p className="project-description">
                  Corporate office redesign emphasizing simplicity, productivity, and 
                  employee well-being through thoughtful space planning.
                </p>
                <a href="#" className="project-link">
                  View Project ?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content fade-in">
            <h2 className="contact-title">Let's Connect</h2>
            <p>
              Interested in working together? I'd love to hear about your project.
            </p>
            <a href="mailto:hello@jamespark.com" className="contact-email">
              hello@jamespark.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2024 James Park. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Behance</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
