import { useEffect, useState } from "react";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* navbar starts */}
      <header>
        <span className="logo">Bryan Aguirre</span>

        <div
          id="menu"
          className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          role="button"
        ></div>

        <nav className={`navbar ${menuOpen ? "nav-toggle" : ""}`}>
          <ul onClick={() => setMenuOpen(false)}>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      {/* navbar ends */}

      {/* hero section starts */}
      <section className="home" id="home">
        <div id="particles-js"></div>

        <div className="content">
          <h2>
            Hi There!
            <br /> I&apos;m Bryan <span>Aguirre</span>
          </h2>
          <p>
            I am a Data Science and Economics graduate from UC Berkeley{" "}
            <span className="typing-text"></span>
          </p>
          <a href="#about" className="btn">
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down"></i>
          </a>
          <div className="socials">
            <ul className="social-icons">
              <li>
                <a
                  className="linkedin"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/bryan-aguirre/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  className="github"
                  aria-label="GitHub"
                  href="https://github.com/baguirre2651"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="image">
          <img draggable="false" className="tilt" src="/website/assets/images/bryan.png" alt="Bryan" />
        </div>
      </section>
      {/* hero section ends */}

      {/* about section starts */}
      <section className="about" id="about">
        <h2 className="heading">
          <i className="fas fa-user-alt"></i> About <span>Me</span>
        </h2>

        <div className="row">
          <div className="image">
            <img draggable="false" className="tilt" src="/website/assets/images/grad.JPG" alt="Graduation" />
          </div>
          <div className="content">
            <h3>I&apos;m Bryan Aguirre</h3>
            <span className="tag">Data Scientist &amp; Economist</span>

            <p>
              I graduated from UC Berkeley in 2024 with a degree in Data Science and Economics. I have experience in
              predictive analytics, statistical modeling, and working with large datasets to deliver insights. I&apos;m
              passionate about solving complex problems and helping organizations grow using data-driven strategies.
            </p>

            <div className="box-container">
              <div className="box">
                <p><span> email : </span> baguirre2651@berkeley.edu</p>
                <p><span> place : </span> Berkeley, California, USA</p>
              </div>
            </div>

            <div className="resumebtn">
              <a
                href="https://drive.google.com/file/d/1agZWwXvV2wHFAXgcO_ZL2wiJNpZMv4ZX/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <span>Resume</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* about section ends */}

      {/* skills section starts */}
      <section className="skills" id="skills">
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Skills &amp; <span>Abilities</span>
        </h2>

        <div className="container">
          <div className="row" id="skillsContainer">
            <div className="bar">
              <div className="info">
                <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python" />
                <span>Python</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="https://img.icons8.com/color/48/000000/sql.png" alt="SQL" />
                <span>SQL</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="https://www.r-project.org/Rlogo.png" alt="R Programming" width="48" height="48" />
                <span>R</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java" />
                <span>Java</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" />
                <span>HTML</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* skills section ends */}

      {/* education section starts */}
      <section className="education" id="education">
        <h1 className="heading">
          <i className="fas fa-graduation-cap"></i> My <span>Education</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img draggable="false" src="/website/assets/images/ucberkeley.png" alt="UC Berkeley" />
            </div>
            <div className="content">
              <h3>UC Berkeley</h3>
              <p>Bachelor&apos;s in Data Science &amp; Economics</p>
              <h4>2020-2024 | Completed</h4>
            </div>
          </div>
        </div>
      </section>
      {/* education section ends */}

      {/* projects section */}
      <section className="projects" id="projects">
        <h2 className="heading">
          <i className="fas fa-project-diagram"></i> Projects
        </h2>

        <div className="projects-container">
          <div className="project-box">
            <h3>Predicting Soccer Match Winners with ML</h3>
            <p>
              Using Python, Machine Learning, Random Forest Classifier, and Data Scraping, I built a model to predict
              outcomes for La Liga matches based on past seasons’ data.
            </p>
            <a
              href="https://github.com/baguirre2651/Predicting-Soccer-Match-Winners-with-ML"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <span>View Project</span> <i className="fas fa-external-link-alt"></i>
            </a>
          </div>

          <div className="project-box">
            <h3>CitiBike Demand Prediction Project</h3>
            <p>
              This project involves time series analysis and machine learning models like LSTM and ARIMA to predict
              daily bike rental demand in San Francisco and Oakland.
            </p>
            <a
              href="https://github.com/baguirre2651/Citi-Bike-Demand-Prediction-Project-"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <span>View Project</span> <i className="fas fa-external-link-alt"></i>
            </a>
          </div>

          <div className="project-box">
            <h3>Bryan Aguirre-Parody- LLM Twitter-Bot</h3>
            <p>
              A parody bot that mimics and predicts funny, sarcastic tweets from me using a Large Language Model.
            </p>
            <a
              href="https://github.com/baguirre2651/Ai-Parody-Twitter-Bot"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <span>View Project</span> <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </section>

      {/* contact section starts */}
      <section className="contact" id="contact">
        <h2 className="heading">
          <i className="fas fa-headset"></i> Get in <span>Touch</span>
        </h2>

        <div className="container">
          <div className="content">
            <div className="image-box">
              <img draggable="false" src="/assets/images/touch.png" alt="Get in touch" />
            </div>
            <form id="contact-form" action="mailto:baguirre2651@berkeley.edu" method="POST" encType="text/plain">
              <div className="form-group">
                <div className="field">
                  <input type="text" name="name" placeholder="Name" required />
                  <i className="fas fa-user"></i>
                </div>
                <div className="field">
                  <input type="email" name="email" placeholder="Email" required />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="message">
                  <textarea placeholder="Message" name="message" required></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>

              <div className="button-area">
                <button type="submit">
                  Submit <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* contact section ends */}

      {/* footer section starts */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Bryan&apos;s Portfolio</h3>
            <p>Thank you for visiting my personal portfolio website! Feel free to connect with me over socials.</p>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#home"><i className="fas fa-chevron-circle-right"></i> home</a>
            <a href="#about"><i className="fas fa-chevron-circle-right"></i> about</a>
            <a href="#skills"><i className="fas fa-chevron-circle-right"></i> skills</a>
            <a href="#education"><i className="fas fa-chevron-circle-right"></i> education</a>
            <a href="#projects"><i className="fas fa-chevron-circle-right"></i> projects</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <p><i className="fas fa-phone"></i> +1 562-541-4862</p>
            <p><i className="fas fa-envelope"></i> baguirre2651@berkeley.edu</p>
            <p><i className="fas fa-map-marked-alt"></i> Berkeley &amp; Long Beach California, USA</p>
            <div className="share">
              <a href="https://www.linkedin.com/in/bryan-aguirre/" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank" rel="noreferrer"></a>
              <a href="https://github.com/baguirre2651" className="fab fa-github" aria-label="GitHub" target="_blank" rel="noreferrer"></a>
            </div>
          </div>
        </div>

        <h1 className="credit">
          Designed with <i className="fa fa-heart pulse"></i> by{" "}
          <a href="https://www.linkedin.com/in/bryan-aguirre/">Bryan Aguirre</a>
        </h1>
      </section>
      {/* footer section ends */}

      {/* scroll top btn */}
      <a
        href="#home"
        aria-label="ScrollTop"
        className={`fas fa-angle-up ${showTop ? "active" : ""}`}
        id="scroll-top"
      ></a>
    </>

    
  );
}
