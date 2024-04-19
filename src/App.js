import GitHub from "./images/GitHub.svg";
import LinkedIn from "./images/LinkedIn.svg";
import Instagram from "./images/Instagram.svg";
import Facebook from "./images/Facebook.svg";
import resume_eng from "./resume_eng.pdf";
import resume_rus from "./resume_rus.pdf";

function App() {
  return (
    <div className="app">
      <div className="profile">
        <div className="profile__image"></div>
        <div className="profile__block">
          <div className="profile__info">
            <h1 className="profile__title">Hey, I'm Denis</h1>
            <p className="profile__subtitle">Web-developer</p>
            <p className="profile__subtitle">currently in Ufa, Russia</p>
            <div className="profile__icons">
              <a
                className="profile__ref"
                href="https://github.com/gskovden"
                target="_blank"
              >
                <img className="profile__img" src={GitHub} alt="github" />
              </a>
              <a
                className="profile__ref"
                href="https://www.linkedin.com/in/denis-gusakov/"
                target="_blank"
              >
                <img className="profile__img" src={LinkedIn} alt="linkedin" />
              </a>
              <a
                className="profile__ref"
                href="https://www.instagram.com/gskovden/"
                target="_blank"
              >
                <img className="profile__img" src={Instagram} alt="instagram" />
              </a>
              <a
                className="profile__ref"
                href="https://www.facebook.com/profile.php?id=100086961397905"
                target="_blank"
              >
                <img className="profile__img" src={Facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="resume">
        <div className="resume__inner">
          <div className="resume__block">
            <p className="resume__title">ABOUT ME</p>
            <div className="resume__area">
              <p className="resume__text">
                Frontend developer with 3+ years of experience in web
                development. Work with React, Redux and TypeScript stack.
                Experience working both on commercial projects in a team and
                freelancing independently. Excellent English language skills to
                work with original documentation. Love chess :)
              </p>
            </div>
          </div>
          <div className="resume__block">
            <p className="resume__title">EXPERIENCE</p>
            <div className="resume__area">
              <div className="resume__part">
                <div className="resume__item">
                  <p className="resume__text resume__bold">IT Cosmos</p>
                  <p className="resume__date">Mar 2023 - PRESENT</p>
                </div>
                <p className="resume__text">
                  <i>Software engineer</i>
                </p>
                <p className="resume__text">Work with an enterprise system for the oil and gas industry to
                  improve its performance, functionality and scalability:</p>
                <ul className="resume__ul">
                  <li>
                    Updated the React library from version 16 to 18, which
                    ensured system compatibility with the latest technological
                    requirements and allowed the project to scale
                  </li>
                  <li>
                    Implemented strong typing using TypeScript, thereby
                    increasing the reliability of development
                  </li>
                  <li>
                    Upgraded the state manager to the modern Redux Toolkit,
                    which increased the efficiency of application state
                    management
                  </li>
                  <li>
                    Integrated Formik to manage forms and process their states
                  </li>
                  <li>
                    Implemented requests to the server using the Axios library,
                    which ensured reliable and fast communication with the
                    backend
                  </li>
                  <li>
                    Updated the user interface using Material UI to improve and
                    ensure a consistent design
                  </li>
                  <li>
                    Used PostgreSQL to work with the database, including running
                    queries and processing data
                  </li>
                </ul>
              </div>
              <div className="resume__part">
                <div className="resume__item">
                  <p className="resume__text resume__bold">
                    Individual entrepreneurship / private practice / freelancing
                    gskovden.ru/
                  </p>
                  <p className="resume__date">Feb 2022 - Mar 2023</p>
                </div>
                <p className="resume__text">
                  <i>Web-developer</i>
                </p>
                <p className="resume__text">
                Development and design of websites and web applications for various clients:
                </p>
                <ul className="resume__ul">
                  <li>
                  Used native JavaScript and React library to create interactive user interfaces
                  </li>
                  <li>
                  Implemented best layout practices using HTML5 and CSS3
                  </li>
                  <li>
                  Implemented responsive design using Flexbox and Grid Layout technologies
                  </li>
                  <li>
                  Used Webpack 5 to build projects, as well as Babel for code transpilation
                  </li>
                  <li>
                  Used Git for version control
                  </li>
                  <li>
                  Used BEM methodology for reusable interface components
                  </li>
                  <li>
                  Optimized projects for SEO and mobile devices
                  </li>
                </ul>
              </div>
              <div className="resume__part">
                <div className="resume__item">
                  <p className="resume__text resume__bold">
                    Ufa State Aviation Technical University
                  </p>
                  <p className="resume__date">JAN 2012 - Feb 2022</p>
                </div>
                <p className="resume__text">
                  <i>
                    Associate Professor / Senior Research Fellow (part-time)
                  </i>
                </p>
                <p className="resume__text">Ufa, Russia</p>
                <p className="resume__text">
                Engaged in analytical and computer research in the field of electrical power systems and developed websites:
                </p>
                <ul className="resume__ul">
                  <li>
                  Developed websites for internal corporate departments
                  </li>
                  <li>
                  Used mathematical methods and computer analysis to calculate electrical networks and electrical equipment
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="resume__block">
            <p className="resume__title">SKILLS</p>
            <div className="resume__area">
              <div className="resume__piece">
                <p className="resume__bold">PROGRAMMING LANGUAGES:&nbsp;</p>
                <p className="resume__text">
                  JavaScript (ES6+), Typescript, HTML5, CSS3, SQL
                </p>
              </div>
              <div className="resume__piece">
                <p className="resume__bold">LIBRARIES & FRAMEWORKS:&nbsp;</p>
                <p className="resume__text">
                  React, Redux, React Query, Formik, React Router, Material UI,
                  Axios, i18next, SaaS
                </p>
              </div>
              <div className="resume__piece">
                <p className="resume__bold">TOOLS:&nbsp;</p>
                <p className="resume__text">
                  Webpack 5, Git, Bitbucket, Postman, npm, Babel, Eslint,
                  Prettier, Figma, BEM
                </p>
              </div>
            </div>
          </div>
          <div className="resume__block">
            <p className="resume__title">EDUCATION</p>
            <div className="resume__area">
              <div className="resume__part">
                <div className="resume__item">
                  <p className="resume__text resume__bold">
                    Ufa State Aviation Technical University
                  </p>
                  <p className="resume__date">SEP 2006 - JULY 2011</p>
                </div>
                <p className="resume__text">Bachelor's Degree</p>
                <p className="resume__text">
                  <i>Electric power systems and networks</i>
                </p>
                <p className="resume__text">Ufa, Russia</p>
              </div>
              <div className="resume__part">
                <div className="resume__item">
                  <p className="resume__text resume__bold">
                    Ufa State Aviation Technical University
                  </p>
                  <p className="resume__date">SEP 2011 - MAY 2016</p>
                </div>
                <p className="resume__text">PhD</p>
                <p className="resume__text">
                  <i>Electrotechnical complexes and systems</i>
                </p>
                <p className="resume__text">Ufa, Russia</p>
              </div>
              <div className="resume__part">
                <div className="resume__item">
                  <p className="resume__text resume__bold">
                    Innopolis University
                  </p>
                  <p className="resume__date">JUN 2021 - NOV 2021</p>
                </div>
                <p className="resume__text">
                  <i>
                    Enterprise full stack development in JavaScript using React,
                    Redux and Node.js
                  </i>
                </p>
                <p className="resume__text">Innopolis, Russia</p>
              </div>
            </div>
          </div>
          <div className="resume__block">
            <p className="resume__title">PROJECTS</p>
            <div className="resume__area">
              <div className="resume__part">
                <a
                  className="resume__bold"
                  href="https://niietkis.ru/"
                  target="_blank"
                >
                  Website of the research institute "Electrotechnical complexes
                  and systems"
                </a>
                <p className="resume__text">
                  The project developed in 2021. The website uses JavaScript
                  (ES6), HTML5, CSS3, the assembly is carried out by Webpack,
                  the layout is adaptive.
                </p>
              </div>
              <div className="resume__part">
                <a
                  className="resume__bold"
                  href="https://etkufa.ru/"
                  target="_blank"
                >
                  Website of the company "ETK"
                </a>
                <p className="resume__text">
                  The project developed in 2021. The website uses JavaScript
                  (ES6), HTML5, CSS3, the assembly is carried out by Webpack,
                  the layout is adaptive.
                </p>
              </div>
              <div className="resume__part">
                <a
                  className="resume__bold"
                  href="https://альтера.рус"
                  target="_blank"
                >
                  Landing page of the company "Altera"
                </a>
                <p className="resume__text">
                  The project developed in 2022. The website uses JavaScript
                  (ES6), HTML5, CSS3, the assembly is carried out by Webpack,
                  the layout is adaptive.
                </p>
              </div>
              <div className="resume__part">
                <a
                  className="resume__bold"
                  href="https://proglass.net.ru"
                  target="_blank"
                >
                  Landing page of the company "Proglass"
                </a>
                <p className="resume__text">
                  The project developed in 2022. The website uses JavaScript
                  (ES6), HTML5, CSS3, the assembly is carried out by Webpack,
                  the layout is adaptive.
                </p>
              </div>
              <div className="resume__part">
                <a
                  className="resume__bold"
                  href="https://tetratek.gskovdesign.ru"
                  target="_blank"
                >
                  Website of the company "Tetratek"
                </a>
                <p className="resume__text">
                  The project developed in 2022. The website uses JavaScript
                  (ES6), HTML5, CSS3, the assembly is carried out by Webpack,
                  the layout is adaptive.
                </p>
              </div>
              <div className="resume__part">
                <a
                  className="resume__bold"
                  href="https://русь.сайт"
                  target="_blank"
                >
                  Landing page of the company "Rus"
                </a>
                <p className="resume__text">
                  The project developed in 2023. The website uses JavaScript
                  (ES6), HTML5, CSS3, the assembly is carried out by Webpack,
                  the layout is adaptive.
                </p>
              </div>
              <div className="resume__part">
                <a
                  className="resume__bold"
                  href="https://спинор.рф"
                  target="_blank"
                >
                  Landing page of the company "Trading House "Spinor"
                </a>
                <p className="resume__text">
                  The project developed in 2023. The website uses JavaScript
                  (ES6), HTML5, CSS3, the assembly is carried out by Webpack,
                  the layout is adaptive.
                </p>
              </div>
            </div>
          </div>
          <div className="resume__block">
            <p className="resume__title">LANGUAGES</p>
            <div className="resume__part">
              <p className="resume__text">Russian - native</p>
              <p className="resume__text">English - advanced</p>
            </div>
          </div>
          <div className="resume__part">
            <a className="resume__download" href={resume_eng} download>
              GRAB A PDF OF MY FULL RESUME (English)
            </a>
            <a className="resume__download" href={resume_rus} download>
              GRAB A PDF OF MY FULL RESUME (Russian)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
