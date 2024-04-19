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
                Frontend developer with over 3 years of experience in web
                development. I specialize in creating high-performance user
                interfaces using modern technologies and libraries. Experience
                working on both commercial projects and freelance. Love chess :)
              </p>
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
                  React, Redux, React Query, Formik, React Router, Material UI, Axios,
                  i18next, SaaS
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
                <p className="resume__text">
                  Upgrading an enterprise system for the oil and gas industry to
                  improve its performance, functionality and scalability.
                  Migrated from React library version 16 to version 18 to ensure
                  compatibility with latest technology requirements and updates.
                  Implemented Material UI to improve the user experience and
                  ensure a consistent design. Implement strong typing using
                  TypeScript to improve code reliability and readability. Using
                  the Redux Toolkit state manager to effectively manage
                  application state. Using Formik to manage forms and handle
                  their states. Implementation of requests to the server using
                  the Axios library, providing reliable and fast communication
                  with the backend. Use PostgreSQL to work with the database,
                  including running queries, processing data and ensuring data
                  integrity.
                </p>
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
                  Development and design of websites and web applications for
                  various clients. All projects used BEM methodology for website
                  extensibility and reusable interface components. Webpack 5 was
                  used to build the projects, as well as Babel for code
                  transpilation. Git was used for version control. Applying best
                  practices for layout using HTML, CSS and JavaScript. All
                  projects were developed with responsive design using Flexbox
                  and Grid Layout. Using React to create dynamic user
                  interfaces. Optimizing projects for SEO and mobile devices.
                </p>
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
                  Conducting analytical research in the field of big data using
                  modern methods and technologies. Computer modeling of
                  electrical networks and electrical equipment using MATLAB,
                  Mathcad and ANSYS software. Develop and analyze models to
                  optimize the operation of electrical systems and equipment to
                  improve efficiency and reliability. Using mathematical methods
                  and statistical analyzes to identify patterns and trends in
                  large volumes of data. Conducting experiments and testing
                  various hypotheses in order to optimize production processes
                  and equipment. Prepare reports, scientific articles and
                  presentations at conferences and seminars demonstrating
                  research results.
                </p>
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
