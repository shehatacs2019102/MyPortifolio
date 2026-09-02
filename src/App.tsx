import { useState, useEffect } from 'react';
import { Code2, Mail, Github, Linkedin, ExternalLink, Terminal, Sparkles } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time order processing',
      tech: ['React', 'PHP', 'MySQL', 'GraphgQL'],
      link: 'https://ecommerce-backend-5443.infy.click/'
    },
    {
      title: 'Live Stream Service (StreamFlow)',
      description: 'A responsive front-end interface for a streaming service',
      tech: ['TypeScript', 'WebSocket', 'OpenAI', 'Redis'],
      link: 'https://shehatacs2019102.github.io/StreamingService/'
    },
    {
      title: 'Readr',
      description: 'A full-stack reading app with a Prisma-backed database',
      tech: ['Next.js', 'React', 'Prisma', 'TypeScript'],
      link: 'https://readr-5pb2tg4ar-shehata1.vercel.app/'
    },
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Python', 'SQL', 'PHP', 'Docker',
    'AWS', 'Git', 'CSS', 'Laravel', 'GraphQL',
    'Gnu/Linux'
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#00ff41', position: 'relative', overflow: 'hidden' }}>
      <div className="gradient-bg" />
      <div className="scanline" />

      <nav>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00ff41', fontWeight: 'bold', fontSize: '20px' }}>
            <Terminal style={{ width: '24px', height: '24px' }} />
            <span className="neon-text">My Portifolio</span>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#about" style={{ color: '#00ff41', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00dd2f'} onMouseLeave={(e) => e.currentTarget.style.color = '#00ff41'}>About</a>
            <a href="#skills" style={{ color: '#00ff41', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00dd2f'} onMouseLeave={(e) => e.currentTarget.style.color = '#00ff41'}>Skills</a>
            <a href="#projects" style={{ color: '#00ff41', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00dd2f'} onMouseLeave={(e) => e.currentTarget.style.color = '#00ff41'}>Projects</a>
            <a href="#contact" style={{ color: '#00ff41', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00dd2f'} onMouseLeave={(e) => e.currentTarget.style.color = '#00ff41'}>Contact</a>
          </div>
        </div>
      </nav>

      <main style={{ position: 'relative', zIndex: 10 }}>
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
          <div className={isVisible ? 'fade-in' : 'fade-in-hidden'} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <Code2 style={{ width: '80px', height: '80px', color: '#00ff41' }} className="neon-glow pulse" />
            </div>
            <h3  style={{ fontSize: 48, fontWeight: 'bold', marginBottom: '16px' }}>Abdelrahman Mohammed Shehata</h3>
            <h1 className="neon-text" style={{ fontSize: 'clamp(48px, 10vw, 120px)', fontWeight: 'bold', marginBottom: '16px' }}>
              FULL STACK
            </h1>
            <h2 style={{ fontSize: 'clamp(32px, 8vw, 80px)', fontWeight: 'bold', marginBottom: '24px', color: '#00dd2f' }}>
              WEB DEVELOPER
            </h2>
            <p style={{ fontSize: '20px', color: '#00bb33', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
              Crafting innovative digital experiences with clean code and creative solutions
            </p>
            <div className="button-group">
            <a href='#projects' type="button" className='a-button' style={{ padding: '12px 32px', borderColor: 'rgba(0, 255, 65, 0.5)' }}>
                View Projects
              </a>
              <a href='#contact' type="button" className='a-button' style={{ padding: '12px 32px', borderColor: 'rgba(0, 255, 65, 0.5)' }}>
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
          <div className="about-container">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '48px', fontWeight: 'bold', marginBottom: '32px' }}>
              {/* <Sparkles style={{ width: '40px', height: '40px' }} /> */}
              <span className="neon-text">ABOUT_ME</span>
            </h2>
            <div className="about-box">
              <p>{'>'} Hello! I'm a passionate full-stack web developer with expertise in building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.</p>
              <p>{'>'} With several years of development experience , I've worked on projects ranging from e-commerce platforms to real-time applications, always focusing on performance, user experience, and maintainable code.</p>
              <p>{'>'} When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
            </div>
          </div>
        </section>

        <section id="skills" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
          <div className="skills-container">
            <h2 className="neon-text" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '48px', textAlign: 'center' }}>
              TECH_STACK
            </h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="skill-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
          <div className="projects-container">
            <h2 className="neon-text" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '48px', textAlign: 'center' }}>
              FEATURED_PROJECTS
            </h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="project-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project <ExternalLink style={{ width: '16px', height: '16px' }} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
          <div className="contact-container">
            <h2 className="neon-text" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '32px' }}>
              GET_IN_TOUCH
            </h2>
            <p style={{ fontSize: '20px', marginBottom: '48px', color: '#00dd2f' }}>
              Let's collaborate on your next project
            </p>
            <div className="contact-box">
              <div className="social-links">
                <a
                  href="mailto:shehatacs9001@gmail.com"
                  className="social-link"
                >
                  <Mail style={{ width: '48px', height: '48px' }} className="neon-glow-hover" />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/shehatacs2019102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github style={{ width: '48px', height: '48px' }} className="neon-glow-hover" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdelrahman-shehata-516439297/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin style={{ width: '48px', height: '48px' }} className="neon-glow-hover" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <button className="contact-button">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Built with React & CSS</p>
      </footer>
    </div>
  );
}

export default App;
