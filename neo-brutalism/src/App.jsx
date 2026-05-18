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
      <nav className="nav">
        <a href="#" className="nav-logo">AC</a>
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
            <span className="hero-badge">?? Available for Work</span>
            <h1>
              Hi, I'm <span className="hero-highlight">Alex Chen</span><br />
              Creative Developer & Designer
            </h1>
            <p>
              I craft bold, engaging digital experiences that make people stop and stare. 
              From sleek websites to interactive apps, I turn ideas into reality with code and creativity.
            </p>
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
              <span className="placeholder-icon">??</span>
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
                websites – I create experiences that resonate with users and drive results.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">150+</span>
                <span className="stat-label">Projects Done</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">15+</span>
                <span className="stat-label">Awards Won</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title fade-in">My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card fade-in">
              <div className="skill-icon">??</div>
              <h3>Frontend Development</h3>
              <p>Building responsive, performant, and beautiful user interfaces that users love.</p>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vue</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Next.js</span>
              </div>
            </div>
            
            <div className="skill-card fade-in">
              <div className="skill-icon">??</div>
              <h3>Backend Development</h3>
              <p>Creating robust APIs and server-side solutions that power modern applications.</p>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            
            <div className="skill-card fade-in">
              <div className="skill-icon">??</div>
              <h3>UI/UX Design</h3>
              <p>Designing intuitive interfaces with a focus on user experience and accessibility.</p>
              <div className="skill-tags">
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Adobe XD</span>
                <span className="skill-tag">Sketch</span>
                <span className="skill-tag">Prototyping</span>
              </div>
            </div>
            
            <div className="skill-card fade-in">
              <div className="skill-icon">??</div>
              <h3>DevOps & Cloud</h3>
              <p>Deploying and maintaining scalable applications in the cloud with CI/CD.</p>
              <div className="skill-tags">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title fade-in">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card fade-in">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>
                  A full-stack e-commerce solution with real-time inventory, payment processing, 
                  and an admin dashboard. Built for scalability and performance.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">Stripe</span>
                  <span className="project-tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link project-link-primary">View Live</a>
                  <a href="#" className="project-link project-link-secondary">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3>Music Streaming App</h3>
                <p>
                  A Spotify-inspired music player with playlist management, social features, 
                  and real-time audio streaming capabilities.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React Native</span>
                  <span className="project-tag">Firebase</span>
                  <span className="project-tag">WebRTC</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link project-link-primary">View Live</a>
                  <a href="#" className="project-link project-link-secondary">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3>Project Management Tool</h3>
                <p>
                  Collaborative project management platform with kanban boards, time tracking, 
                  and team communication features.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Vue.js</span>
                  <span className="project-tag">Django</span>
                  <span className="project-tag">PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link project-link-primary">View Live</a>
                  <a href="#" className="project-link project-link-secondary">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">???</div>
              <div className="project-content">
                <h3>Fitness Tracking App</h3>
                <p>
                  Mobile-first fitness application with workout plans, progress tracking, 
                  and AI-powered recommendations.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Flutter</span>
                  <span className="project-tag">TensorFlow</span>
                  <span className="project-tag">AWS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link project-link-primary">View Live</a>
                  <a href="#" className="project-link project-link-secondary">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3>Food Delivery Platform</h3>
                <p>
                  Complete food ordering system with restaurant management, real-time tracking, 
                  and payment integration.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Next.js</span>
                  <span className="project-tag">GraphQL</span>
                  <span className="project-tag">Redis</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link project-link-primary">View Live</a>
                  <a href="#" className="project-link project-link-secondary">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">??</div>
              <div className="project-content">
                <h3>Learning Management System</h3>
                <p>
                  Educational platform with video courses, quizzes, certificates, 
                  and student progress analytics.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Express</span>
                  <span className="project-tag">MySQL</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link project-link-primary">View Live</a>
                  <a href="#" className="project-link project-link-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title fade-in">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <span className="timeline-date">2021 - Present</span>
                <h3>Senior Full Stack Developer</h3>
                <div className="timeline-company">TechCorp Inc.</div>
                <p>
                  Leading development of enterprise-level applications using React, Node.js, and AWS. 
                  Mentoring junior developers and implementing best practices across the team.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <span className="timeline-date">2019 - 2021</span>
                <h3>Frontend Developer</h3>
                <div className="timeline-company">Digital Agency Pro</div>
                <p>
                  Developed responsive web applications for various clients. Specialized in React, 
                  Vue.js, and modern CSS frameworks. Improved site performance by 40% on average.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <span className="timeline-date">2017 - 2019</span>
                <h3>Web Developer</h3>
                <div className="timeline-company">StartupHub</div>
                <p>
                  Built MVPs for multiple startups. Worked with cross-functional teams to deliver 
                  products from concept to launch. Focused on rapid prototyping and iteration.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <span className="timeline-date">2015 - 2017</span>
                <h3>Junior Developer</h3>
                <div className="timeline-company">Creative Studio</div>
                <p>
                  Started my professional journey building websites and learning modern web technologies. 
                  Contributed to over 30 client projects during this period.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title fade-in">Let's Work Together</h2>
          <div className="contact-content fade-in">
            <p className="contact-text">
              Have a project in mind? Want to collaborate? Or just want to say hi? 
              I'd love to hear from you! Drop me a message and let's create something amazing together.
            </p>
            
            <div className="contact-methods">
              <a href="mailto:alex.chen@example.com" className="contact-card">
                <div className="contact-icon">??</div>
                <h3>Email</h3>
                <p>alex.chen@example.com</p>
              </a>
              
              <a href="tel:+1234567890" className="contact-card">
                <div className="contact-icon">??</div>
                <h3>Phone</h3>
                <p>+1 (234) 567-890</p>
              </a>
              
              <a href="#" className="contact-card">
                <div className="contact-icon">??</div>
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                ??
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                ??
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                ??
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-link">
                ??
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-link">
                ??
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Alex Chen. Built with React + Vite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
