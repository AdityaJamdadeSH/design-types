import { useEffect, useRef } from 'react';
import { useTheme } from './themes/ThemeProvider';
import './App.css';

function App() {
  const { portfolio, config } = useTheme();
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
      <nav className="nav">
        <a href="#" className="nav-logo">{portfolio.name.split(' ').map(n => n[0]).join('')}</a>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Available for Work</span>
            <h1>
              Hi, I'm <span className="hero-highlight">{portfolio.name}</span><br />
              {portfolio.title}
            </h1>
            <p>{portfolio.description}</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-img-wrapper">
              <span className="placeholder-icon">DEV</span>
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
                I'm a passionate developer with a love for creating stunning digital experiences. 
                With 8+ years in the industry, I've worked with startups, agencies, and enterprises 
                to bring their visions to life.
              </p>
              <p>
                When I'm not coding, you'll find me exploring design trends, contributing to open 
                source, or brewing the perfect cup of coffee. I believe in clean code, bold design, 
                and making the web a more beautiful place.
              </p>
              <p>
                My approach combines technical expertise with creative thinking. I don't just build 
                websites - I create experiences that resonate with users and drive results.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <h3>8+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <h3>150+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3>50+</h3>
                <p>Happy Clients</p>
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
            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'CSS/SCSS', 'UI/UX Design', 'Figma', 'Git'].map((skill, index) => (
              <div key={index} className="skill-card">
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title fade-in">Featured Projects</h2>
          <div className="projects-grid fade-in">
            {[1, 2, 3].map((project) => (
              <div key={project} className="project-card">
                <div className="project-image">
                  <span className="project-placeholder">PROJECT</span>
                </div>
                <div className="project-info">
                  <h3>Project {project}</h3>
                  <p>A cutting-edge web application built with modern technologies and best practices.</p>
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">MongoDB</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="project-link">View Project</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title fade-in">Work Experience</h2>
          <div className="timeline fade-in">
            {[
              { year: '2021-Present', title: 'Senior Developer', company: 'Tech Corp', description: 'Leading frontend development and mentoring junior developers.' },
              { year: '2019-2021', title: 'Full Stack Developer', company: 'Startup Inc', description: 'Built scalable web applications from scratch.' },
              { year: '2016-2019', title: 'Frontend Developer', company: 'Digital Agency', description: 'Created responsive websites for various clients.' }
            ].map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <div className="contact-content fade-in">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="icon">EMAIL</span>
                  <span>hello@example.com</span>
                </div>
                <div className="contact-item">
                  <span className="icon">PHONE</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="icon">LOCATION</span>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Your Email" className="form-input" />
              <textarea placeholder="Your Message" className="form-textarea" rows="5"></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 {portfolio.name}. All rights reserved.</p>
          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Dribbble</a>
          </div>
          <p className="theme-info">
            UI: {config.uiType} | Fonts: {config.fontScheme} | Colors: {config.colorScheme}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
