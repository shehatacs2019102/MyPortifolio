import { useState, useEffect, type MouseEvent, type ReactNode } from 'react';
import { Code2, Mail, Github, Linkedin, ExternalLink, Terminal, ChevronDown } from 'lucide-react';
import Scene3D from './Scene3D';

const GITHUB = 'https://github.com/shehatacs2019102';

function Window({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`window ${className}`}>
      <div className="window-bar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="window-title">{title}</span>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}

function SectionTitle({ num, children }: { num: string; children: ReactNode }) {
  return (
    <h2 className="section-title">
      <span className="section-num">{num}.</span>
      <span className="neon-text">{children}</span>
    </h2>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'Whiskers',
      slug: 'whiskers',
      description: 'A booking site for a cat care business. Pick a service, choose a date and time on a calendar, and book through a .NET API that blocks double bookings.',
      tech: ['Angular', 'TypeScript', 'ASP.NET Core', 'SQLite'],
      link: 'https://shehatacs2019102.github.io/WhIskers/',
      source: `${GITHUB}/WhIskers`
    },
    {
      title: 'E-Commerce Platform',
      slug: 'ecommerce',
      description: 'Full-stack e-commerce solution with real-time order processing',
      tech: ['React', 'PHP', 'MySQL', 'GraphQL'],
      link: 'https://ecommerce-backend-5443.infy.click/',
      source: `${GITHUB}/scandiweb-fullstack-task`
    },
    {
      title: 'StreamFlow',
      slug: 'streamflow',
      description: 'A responsive front-end interface for a live streaming service',
      tech: ['TypeScript', 'WebSocket', 'OpenAI', 'Redis'],
      link: 'https://shehatacs2019102.github.io/StreamingService/',
      source: `${GITHUB}/StreamingService`
    },
    {
      title: 'Readr',
      slug: 'readr',
      description: 'A full-stack reading app with a Prisma-backed database',
      tech: ['Next.js', 'React', 'Prisma', 'TypeScript'],
      link: 'https://readr-snowy-chi.vercel.app/',
      source: `${GITHUB}/Readr-dev`
    },
  ];

  const skillGroups = [
    { name: 'frontend', skills: ['JavaScript', 'TypeScript', 'React', 'Angular', 'CSS'] },
    { name: 'backend', skills: ['Node.js', 'PHP', 'Laravel', 'Python', '.NET', 'GraphQL', 'SQL'] },
    { name: 'devops_tools', skills: ['Docker', 'AWS', 'Git', 'Gnu/Linux'] },
  ];

  const tilt = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(10px)`;
  };

  const resetTilt = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#00ff41', position: 'relative', overflow: 'hidden' }}>
      <div className="gradient-bg" />
      <Scene3D />
      <div className="scanline" />

      <nav>
        <div className="nav-content">
          <a href="#top" className="nav-logo">
            <Terminal style={{ width: '24px', height: '24px' }} />
            <span className="neon-text">My Portfolio</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <section id="top" className="hero">
          <div className={isVisible ? 'fade-in' : 'fade-in-hidden'} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <Code2 style={{ width: '80px', height: '80px', color: '#00ff41' }} className="neon-glow pulse" />
            </div>
            <p className="prompt"><span className="typed">&gt; whoami</span></p>
            <p className="hero-name">Abdelrahman Mohammed Shehata</p>
            <h1 className="neon-text hero-title">FULL STACK</h1>
            <h2 className="hero-subtitle">
              WEB DEVELOPER<span className="cursor" aria-hidden="true">_</span>
            </h2>
            <p className="hero-tagline">
              Crafting innovative digital experiences with clean code and creative solutions
            </p>
            <div className="button-group">
              <a href="#projects" className="a-button a-button-primary">View Projects</a>
              <a href="#contact" className="a-button">Contact Me</a>
            </div>
          </div>
          <a href="#about" className="scroll-hint" aria-label="Scroll to About">
            <ChevronDown style={{ width: '28px', height: '28px' }} />
          </a>
        </section>

        <section id="about">
          <div className="about-container">
            <SectionTitle num="01">ABOUT_ME</SectionTitle>
            <Window title="~/about.txt">
              <div className="about-text">
                <p>{'>'} Hello! I'm a passionate full-stack web developer with expertise in building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.</p>
                <p>{'>'} With several years of development experience, I've worked on projects ranging from e-commerce platforms to real-time applications, always focusing on performance, user experience, and maintainable code.</p>
                <p>{'>'} When I'm not coding, you'll find me exploring new technologies or sharing knowledge with the developer community.</p>
              </div>
            </Window>
          </div>
        </section>

        <section id="skills">
          <div className="skills-container">
            <SectionTitle num="02">TECH_STACK</SectionTitle>
            <div className="skills-grid">
              {skillGroups.map((group, groupIndex) => (
                <Window key={group.name} title={`~/skills/${group.name}`} className="skill-group">
                  <div className="skill-chips">
                    {group.skills.map((skill, index) => (
                      <span
                        key={skill}
                        className="skill-chip"
                        style={{ animationDelay: `${groupIndex * 0.2 + index * 0.06}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Window>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="projects-container">
            <SectionTitle num="03">FEATURED_PROJECTS</SectionTitle>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="project-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseMove={tilt}
                  onMouseLeave={resetTilt}
                >
                  <div className="window-bar">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                    <span className="window-title">~/projects/{project.slug}</span>
                  </div>
                  <div className="project-body">
                    <span className="project-num">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-tags">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                        Live Demo <ExternalLink style={{ width: '16px', height: '16px' }} />
                      </a>
                      <a href={project.source} target="_blank" rel="noopener noreferrer" className="project-link">
                        Source <Github style={{ width: '16px', height: '16px' }} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="contact-container">
            <SectionTitle num="04">GET_IN_TOUCH</SectionTitle>
            <p className="contact-lead">
              Let's collaborate on your next project
            </p>
            <Window title="~/contact.sh">
              <div className="social-links">
                <a href="mailto:shehatacs9001@gmail.com" className="social-link">
                  <Mail style={{ width: '40px', height: '40px' }} />
                  <span>Email</span>
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github style={{ width: '40px', height: '40px' }} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdelrahman-shehata-516439297/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin style={{ width: '40px', height: '40px' }} />
                  <span>LinkedIn</span>
                </a>
              </div>
              <a href="mailto:shehatacs9001@gmail.com" className="contact-button">
                SEND MESSAGE
              </a>
            </Window>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Abdelrahman Shehata · Built with React &amp; CSS</p>
      </footer>
    </div>
  );
}

export default App;
