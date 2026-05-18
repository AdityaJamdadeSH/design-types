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
      {/* Background Orbs */}
      <div className="background-orb orb-1"></div>
      <div className="background-orb orb-2"></div>
      <div className="background-orb orb-3"></div>

      {/* Navigation */}
      <nav className="nav glass">
        <a href="#" className="nav-logo">SW</a>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge glass">
              <span className="badge-dot"></span>
              Available for projects
            </span>
            <h1>
              Hi, I'm <span className="hero-highlight">Sarah Williams</span><br />
              UI/UX Designer & Creative Developer
            </h1>
            <p>
              I design beautiful, intuitive digital experiences with a focus on modern aesthetics 
              and seamless user interactions. Let's create something amazing together.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary glass" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-img-wrapper glass">
              <span>?</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title fade-in">About Me</h2>
          <div className="about-content fade-in">
            <div className="about-text">
              <p>
                I'm a passionate UI/UX designer with over 6 years of experience creating 
                stunning digital products. My design philosophy centers on clarity, elegance, 
                and user-centered thinking.
              </p>
              <p>
                I specialize in glassmorphism and modern design trends, crafting interfaces 
                that are both visually striking and highly functional. Every project is an 
                opportunity to push creative boundaries.
              </p>
              <p>
                When I'm not designing, you'll find me exploring new design systems, 
                contributing to design communities, or experimenting with the latest 
                web technologies.
              </p>
            </div>
            <div className="about-stats glass">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title fade-in">Skills & Expertise</h2>
          <div className="skills-grid fade-in">
            <div className="skill-card glass">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">UI Design</h3>
            </div>
            <div className="skill-card glass">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">UX Research</h3>
            </div>
            <div className="skill-card glass">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">React</h3>
            </div>
            <div className="skill-card glass">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">Figma</h3>
            </div>
            <div className="skill-card glass">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">CSS/Animation</h3>
            </div>
            <div className="skill-card glass">
              <span className="skill-icon">??</span>
              <h3 className="skill-name">Responsive Design</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title fade-in">Featured Projects</h2>
          <div className="projects-grid fade-in">
            <div className="project-card glass">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">Modern Dashboard</h3>
                <p className="project-description">
                  A sleek analytics dashboard with glassmorphic UI elements and real-time data visualization.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">UI/UX</span>
                  <span className="tag">Charts</span>
                </div>
              </div>
            </div>
            <div className="project-card glass">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">SaaS Platform</h3>
                <p className="project-description">
                  Complete redesign of a B2B SaaS platform focusing on user experience and conversion.
                </p>
                <div className="project-tags">
                  <span className="tag">Figma</span>
                  <span className="tag">Design System</span>
                  <span className="tag">UX</span>
                </div>
              </div>
            </div>
            <div className="project-card glass">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3 className="project-title">Mobile App</h3>
                <p className="project-description">
                  iOS and Android app design with smooth animations and intuitive navigation.
                </p>
                <div className="project-tags">
                  <span className="tag">Mobile</span>
                  <span className="tag">Prototyping</span>
                  <span className="tag">Animation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title fade-in">Let's Work Together</h2>
            <p className="fade-in">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Let's create something extraordinary.
            </p>
            <div className="contact-buttons fade-in">
              <a href="mailto:hello@sarahwilliams.com" className="btn btn-primary">
                Send Message
              </a>
              <a href="#" className="btn btn-secondary glass">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
