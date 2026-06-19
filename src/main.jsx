import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Award,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  GraduationCap,
  Link,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Harshini T',
  title: 'Artificial Intelligence & Data Science Student',
  objective:
    'I am a 3rd-year B.Tech student in Artificial Intelligence and Data Science, eager to learn and grow. I want to gain experience across AI and data science, work on real projects, and develop practical skills to solve real-world problems.',
  phone: '7200883768',
  email: 'tharshini65@jnn.edu.in',
  location: 'Chennai, Tamil Nadu',
  github: 'https://github.com/harsh-282',
  linkedin: 'https://www.linkedin.com/in/harshini-thejeswaran',
};

const technicalSkills = [
  'Python',
  'Power BI',
  'SQL',
  'MS Office Tools',
  'ML / AI Basics',
];

const professionalSkills = [
  'Problem Solving',
  'Analytical Thinking',
  'Communication',
  'Adaptability',
  'Learning Ability',
];

const interests = ['Artificial Intelligence', 'Machine Learning', 'Data Analytics'];

const education = [
  {
    school: 'JNN Institute of Engineering',
    period: '2023 - 2027',
    course: 'B.Tech in Artificial Intelligence and Data Science',
    score: 'CGPA: 9.25 till present',
  },
  {
    school: "Children's Paradise Matric Higher Secondary School",
    period: '2023',
    course: 'HSC, 12th Standard',
    score: 'Percentage: 89%',
  },
];

const projects = [
  {
    name: 'Tic Tac Toe Game',
    tools: 'Python',
    description:
      'Developed a classic Tic Tac Toe game with interactive gameplay and AI-based logic.',
    link: 'https://github.com/harsh-282/Tic-Tac-Toe.py',
  },
  {
    name: 'Business Overview Dashboard',
    tools: 'Power BI, Excel, SQL',
    description:
      'Created an interactive Power BI dashboard to visualize and analyze business data for better decision-making.',
    outcome:
      'Developed visually appealing dashboards with actionable insights for management.',
  },
];

const experience = [
  {
    role: 'AI Intern',
    company: 'Codsoft',
    mode: 'Online',
    period: 'Dec 2024 - Jan 2025',
    points: [
      'Built a Tic Tac Toe game using Python with AI-based logic.',
      'Developed a recommendation system for personalized suggestions.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Prodigy Infotech',
    mode: 'Online',
    period: 'Dec 2024 - Jan 2025',
    points: [
      'Performed data preprocessing, visualization, and applied ML models on datasets.',
      'Gained practical experience in solving real-world data science problems.',
    ],
  },
  {
    role: 'Data Analytics Intern',
    company: '8Queens Software Technologies Pvt. Ltd.',
    mode: 'Offline',
    period: 'May 2025 - June 2025',
    points: [
      'Designed and developed an interactive Power BI dashboard for business data analysis.',
      'Delivered actionable insights to support management decision-making.',
    ],
  },
];

const achievements = [
  'Secured CGPA 9.245 up to 4th semester in B.Tech AI & Data Science.',
  'Achieved 92.8% in 11th standard and 89% in 12th standard.',
  'Participated in Accenture Hackathon, gaining hands-on exposure to real-world problem-solving.',
];

const certifications = [
  'Cloud Computing - IIT Kharagpur (NPTEL)',
  'Introduction to Machine Learning: Art of the Possible - AWS',
  'Data Analytics Internship Certificate - 8Queens Software Technologies',
  'Introduction to Internet of Things - IIT Kharagpur (NPTEL)',
  'Master Data Management for Beginners - TCS iON',
  'Introduction to Cybersecurity Awareness - HP LIFE',
  'Career Edge - Young Professional - TCS iON',
];

const personalInfo = [
  ['Date of Birth', '28 Dec 2004'],
  ['Languages', 'English, Tamil, Telugu'],
  ['Address', 'Chennai, Tamil Nadu'],
  ['Hobbies', 'Creativity, Continuous Learning, Problem Solving'],
];

function Section({ id, icon: Icon, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="section-title">
        <Icon size={22} />
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a href="#profile">Profile</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <header className="hero" id="profile">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="subtitle">{profile.title}</p>
          <p className="objective">{profile.objective}</p>
          <div className="hero-actions">
            <a className="primary" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Contact Me
            </a>
            <a className="secondary" href={profile.github} target="_blank" rel="noreferrer">
              <GitBranch size={18} />
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Quick profile details">
          <div className="avatar">HT</div>
          <div>
            <span>Current Focus</span>
            <strong>AI, ML, and data analytics projects</strong>
          </div>
          <div>
            <span>Academic Strength</span>
            <strong>CGPA 9.25</strong>
          </div>
          <div>
            <span>Based In</span>
            <strong>Chennai, Tamil Nadu</strong>
          </div>
        </div>
      </header>

      <div className="layout">
        <div className="main-column">
          <Section id="experience" icon={BriefcaseBusiness} title="Internship Experience">
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.role}-${item.company}`}>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company} · {item.mode}</p>
                  </div>
                  <time>{item.period}</time>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          <Section id="projects" icon={Code2} title="Projects">
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-icon">
                    {project.tools.includes('Power') ? <BarChart3 size={24} /> : <Sparkles size={24} />}
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.outcome && <p className="muted">{project.outcome}</p>}
                  <span>{project.tools}</span>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  )}
                </article>
              ))}
            </div>
          </Section>

          <Section id="education" icon={GraduationCap} title="Education">
            <div className="education-grid">
              {education.map((item) => (
                <article className="education-card" key={item.school}>
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.course}</p>
                  </div>
                  <strong>{item.score}</strong>
                  <time>{item.period}</time>
                </article>
              ))}
            </div>
          </Section>
        </div>

        <aside className="side-column">
          <Section id="skills" icon={Sparkles} title="Skills">
            <h3 className="mini-heading">Technical</h3>
            <div className="chips">
              {technicalSkills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
            <h3 className="mini-heading">Professional</h3>
            <div className="chips">
              {professionalSkills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
            <h3 className="mini-heading">Interests</h3>
            <div className="chips">
              {interests.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </Section>

          <Section id="achievements" icon={Award} title="Achievements">
            <ul className="clean-list">
              {achievements.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Section>

          <Section id="certifications" icon={BookOpen} title="Certifications">
            <ul className="clean-list compact">
              {certifications.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Section>
        </aside>
      </div>

      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s connect for AI, analytics, and learning opportunities.</h2>
        </div>
        <div className="contact-links">
          <a href={`tel:${profile.phone}`}><Phone size={18} />{profile.phone}</a>
          <a href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><GitBranch size={18} />harsh-282</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Link size={18} />harshini-thejeswaran</a>
          <span><MapPin size={18} />{profile.location}</span>
        </div>
      </section>

      <section className="personal">
        {personalInfo.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
