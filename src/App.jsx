import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;

const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "https://img.icons8.com/color/48/000000/python.png" },
      { name: "SQL", icon: "https://img.icons8.com/color/48/000000/sql.png" },
      { name: "R", icon: "https://www.r-project.org/Rlogo.png" },
      { name: "Java", icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" },
      { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript.png" },
      { name: "TypeScript", icon: "https://img.icons8.com/color/48/000000/typescript.png" },
      { name: "Swift", icon: "https://img.icons8.com/color/48/000000/swift.png" },
      { name: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
      { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
    ],
  },
  {
    title: "Data / ML",
    items: [
      { name: "Pandas", icon: "https://img.icons8.com/color/48/pandas.png" },
      { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Random Forests" },
      { name: "LSTM" },
      { name: "ARIMA" },
      { name: "A/B Testing" },
      { name: "Data Mining" },
    ],
  },
  {
    title: "Product / Web",
    items: [
      { name: "React", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
      { name: "Next.js", icon: "https://img.icons8.com/color/96/nextjs.png" },
      { name: "Firebase", icon: "https://img.icons8.com/color/48/firebase.png" },
      { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
      { name: "Dashboards" },
      { name: "Computer Vision" },
      { name: "LLM Fine-Tuning" },
    ],
  },
  {
    title: "Infra / Workflow",
    items: [
      { name: "AWS", icon: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "Snowflake", icon: "https://img.icons8.com/color/48/snowflake.png" },
      { name: "Airflow", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Apache_Airflow_logo.svg" },
      { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
      { name: "ETL Pipelines" },
      { name: "Model Validation" },
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "In Search Of",
    year: "2025",
    role: "Founder, full-stack, AI",
    href: "https://www.iso-us.com",
    description:
      "A demand-driven reverse marketplace where buyers post what they want and sellers come to them. Built the product around search aggregation, AI-assisted item authentication, valuation signals, live auction tracking, and auto-bid workflows.",
  },
  {
    number: "02",
    title: "La Liga Match Prediction",
    year: "2024",
    role: "Machine learning, Python",
    href: "https://github.com/baguirre2651/Predicting-Soccer-Match-Winners-with-ML",
    description:
      "Random Forest model trained on 2018-2023 match data, reaching 78% prediction accuracy after feature engineering, rolling averages, and predictor tuning.",
  },
  {
    number: "03",
    title: "CitiBike Demand Forecasting",
    year: "2023",
    role: "Time series, LSTM, ARIMA",
    href: "https://github.com/baguirre2651/Citi-Bike-Demand-Prediction-Project-",
    description:
      "Forecasted bike rental demand across San Francisco and Oakland with sequence models and classical time-series baselines.",
  },
  {
    number: "04",
    title: "LLM Parody Bot",
    year: "2023",
    role: "Fine-tuning, language models",
    href: "https://github.com/baguirre2651/Ai-Parody-Twitter-Bot",
    description:
      "A fine-tuned bot trained to mimic a personal writing style while exploring lightweight personality modeling and prompt behavior.",
  },
];

const experience = [
  {
    date: "2025 - 2026",
    role: "Junior Data Scientist",
    company: "Y Equals X",
    place: "Los Angeles, CA",
    description:
      "Built predictive models, dashboards, validation workflows, and data pipelines that translated complex risk probabilities into decisions stakeholders could act on.",
  },
  {
    date: "Summer 2023",
    role: "Data Analyst Intern",
    company: "SA Photonics / CACI",
    place: "San Jose, CA",
    description:
      "Processed satellite datasets, identified outliers, evaluated regression models, and helped improve ETL workflows for a cross-functional team.",
  },
  {
    date: "Spring 2023",
    role: "Data Contractor",
    company: "Scale AI / Outlier",
    place: "San Francisco, CA",
    description:
      "Optimized data workflows and turned noisy regression analysis into strategic narratives for operational teams.",
  },
];

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          Bryan Aguirre
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__copy reveal in-view">
            <h1>
              Hi there, I&apos;m Bryan Aguirre.
            </h1>
            <p className="hero__lede">
              I&apos;m a UC Berkeley Data Science and Economics graduate based in
              New York City, building with data, product, and creative
              instinct.
            </p>
            <div className="hero__meta">
              <span>UC Berkeley 2024</span>
              <span>New York City</span>
            </div>
            <div className="hero-actions">
              <div className="hero-socials">
                <a
                  href="https://www.linkedin.com/in/bryan-aguirre/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/baguirre2651"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <a className="hero-about-button" href="#about">
                <span>About Me</span>
                <i className="fas fa-arrow-circle-down"></i>
              </a>
            </div>
          </div>

          <div className="hero__media" aria-label="Bryan Aguirre portrait">
            <img
              className="hero__image"
              src={`${base}assets/images/grad-white-v2.png`}
              alt="Bryan Aguirre at UC Berkeley graduation"
            />
          </div>
        </section>

        <section className="intro reveal" id="about">
          <div className="section-title">
            <i className="fas fa-user-alt"></i>
            <h2>About <span>Me</span></h2>
          </div>
          <div className="about-layout">
            <div className="about-image">
              <img
                className="intro__photo"
                src={`${base}assets/images/volanco.JPG`}
                alt="Volcano landscape photographed by Bryan"
              />
            </div>
            <div className="about-copy">
              <h3>I&apos;m Bryan Aguirre</h3>
              <p className="about-tag">Data Scientist, Designer, Creative Technologist</p>
              <p>
                I&apos;m a Long Beach native and UC Berkeley grad with a Data
                Science degree and Economics emphasis, now based in New York
                City. Most recently I was a Data Scientist at Y=X, building
                predictive models and dashboards for fintech.
              </p>
              <p>
                On the side I&apos;m the founder of{" "}
                <a href="https://www.iso-us.com" target="_blank" rel="noreferrer">
                  In Search Of
                </a>
                , a fashion-tech commerce platform and demand-driven reverse
                marketplace. Bilingual in Spanish and English, usually making
                short-form videos when I&apos;m not behind a keyboard.
              </p>
              <div className="about-details">
                <p><span>Email :</span> baguirre2651@berkeley.edu</p>
                <p><span>Place :</span> New York City, New York</p>
              </div>
              <div className="intro__actions">
                <a
                  className="button button--inline"
                  href="https://drive.google.com/file/d/1VgrrelNuVxLwO-oEAGgC_qhE90aIfvHu/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-file-alt"></i>
                  Resume
                </a>
                <a
                  className="button button--inline"
                  href="https://www.youtube.com/@b.ryanaguirre"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="work reveal" id="work">
          <SectionLabel number="02">Selected Work</SectionLabel>
          <div className="section-heading">
              <h2>Selected work.</h2>
            <p>
              Marketplaces, forecasting, machine learning, and applied language
              models.
            </p>
          </div>

          <div className="work-list">
            {projects.map((project) => (
              <a
                className="work-row"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
              >
                <span className="work-row__number">{project.number}</span>
                <span className="work-row__title">{project.title}</span>
                <span className="work-row__meta">
                  {project.year} / {project.role}
                </span>
                <span className="work-row__arrow" aria-hidden="true">
                  ↗
                </span>
                <p>{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="capabilities reveal" id="skills">
          <SectionLabel number="03">Capabilities</SectionLabel>
          <div className="capabilities__grid">
            <div>
              <h2>Stack.</h2>
              <p>
                Tools I use across analysis, modeling, product, and data
                workflows.
              </p>
            </div>
            <div className="stack-grid">
              {skillGroups.map((group) => (
                <article className="stack-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skill-cloud">
                    {group.items.map((skill) => (
                      <span key={skill.name}>
                        {skill.icon && <img src={skill.icon} alt="" />}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience reveal" id="experience">
          <SectionLabel number="04">Experience</SectionLabel>
          <div className="section-heading">
            <h2>Experience.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-row" key={`${item.company}-${item.date}`}>
                <time>{item.date}</time>
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-row__company">
                    {item.company} / {item.place}
                  </p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education reveal" id="education">
          <SectionLabel number="05">Education</SectionLabel>
          <div className="education-card">
            <img src={`${base}assets/images/ucberkeley.png`} alt="UC Berkeley seal" />
            <div>
              <h2>University of California, Berkeley</h2>
              <p>
                B.A. Data Science, Economics emphasis / College of Computing,
                Data Science, and Society / Completed 2024
              </p>
              <p className="education-card__coursework">
                Foundations of Data Science, Data Structures, Probability,
                Linear Algebra, Machine Learning, Data Mining, Trust & Safety,
                Microeconomics, Data & Decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="contact reveal" id="contact">
          <p className="kicker">Contact</p>
          <h2>Let&apos;s connect!</h2>
          <a className="contact-link" href="mailto:baguirre2651@berkeley.edu">
            baguirre2651@berkeley.edu
          </a>
          <div className="contact__socials">
            <a
              href="https://www.linkedin.com/in/bryan-aguirre/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/baguirre2651"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Bryan Aguirre</span>
        <span>Data science / product / creative technology</span>
        <a href="#home">Back to top</a>
      </footer>

      <a
        href="#home"
        aria-label="Scroll to top"
        className={`scroll-top ${showTop ? "is-visible" : ""}`}
      >
        ↑
      </a>
    </>
  );
}
