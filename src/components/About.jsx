/* 
- Skills mit gelben quadraten darstellen. höchstens 5 ... leere quadrate vllt grau?
- return noch in weiter Components zerpflücken?
*/
import anime from "animejs/lib/anime.es.js";

function About() {
  const skills = [
    { id: 1, name: "JAVASCRIPT", lvl: 4, type: "language" },
    { id: 12, name: "TYPESCRIPT", lvl: 3, type: "language" },
    { id: 2, name: "CSS", lvl: 3, type: "language" },
    { id: 3, name: "HTML", lvl: 4, type: "language" },
    { id: 4, name: "PYTHON", lvl: 2, type: "language" },
    { id: 5, name: "REACT", lvl: 4, type: "library" },
    { id: 13, name: "ANGULAR", lvl: 3, type: "library" },
    { id: 6, name: "NODE", lvl: 3, type: "backend" },
    { id: 7, name: "MONGODB", lvl: 3, type: "backend" },
    { id: 8, name: "SASS", lvl: 3, type: "tools" },
    { id: 9, name: "BOOTSTRAP", lvl: 2, type: "library" },
    { id: 10, name: "ANIME", lvl: 2, type: "library" },
    { id: 11, name: "EXPRESS", lvl: 3, type: "backend" },
    { id: 14, name: "MySQL", lvl: 2, type: "backend" },
    { id: 15, name: "PostgreSQL", lvl: 2, type: "backend" },
    { id: 16, name: "OpenAPI", lvl: 2, type: "backend" },
    { id: 17, name: "VISUALSTUDIO", lvl: 3, type: "tools" },
    { id: 13, name: "INTELLIJ", lvl: 3, type: "tools" },
  ];

  const languages = skills.filter((el) => el.type === "language");
  const libraries = skills.filter((el) => el.type === "library");
  const backend = skills.filter((el) => el.type === "backend");
  const tools = skills.filter((el) => el.type === "tools");
  //console.log(libraries);

  const qualis = [
    {
      id: 1,
      year: 2025,
      name: "Fullstack WebDev",
      institute: "DigitalCareerInstitute GmbH",
      info: [
        { name: "UI Basics (9 weeks)", info: "- HTML, CSS, SASS, Bootstrap" },
        { name: "Programm Basics (9 weeks)", info: "- Javascript" },
        {
          name: "Single Page Application (9 weeks)",
          info: "- APIs, JSON, React.js, Vite",
        },
        {
          name: "Backend (9 weeks)",
          info: "- Node.js, Express.js, SQL, MongoDB",
        },
        {
          name: "Final Project (9 weeks)",
          info: "- plan, create and present a software project",
        },
        { name: "Internship (9 weeks)", info: "" },
      ],
    },
    {
      id: 2,
      year: 2024,
      name: "Basic Python Training",
      institute: "VHS Brandenburg a. d. Havel",
      info: [
        {
          name: "",
          info: "- functions, variables, operators, loops and arrays",
        },
        {
          name: "",
          info: "- classes, constructors and destructors, simple and complex inheritance, polymophism",
        },
        { name: "", info: "- create simple programs" },
      ],
    },
    {
      id: 3,
      year: 2009,
      name: "Bachelor of Arts - Social Work",
      institute: "Hochschule Niederrhein",
      info: [{ name: "", info: "" }],
    },
  ];

  anime({
    targets: ".level-box",
    scale: "1",
    rotate: "1turn",
    duration: 5000,
    loop: true,
  });

  return (
    <>
      <div className="aboutWrapper">
        <div className="aboutContainer">
          <h2>About</h2>
          
          <div className="photo"></div>

          <div className="facts">
            Hello Hi, I'm <span>Judith Bohmann</span> – a web developer with a
            strong focus on frontend technologies based in Potsdam. I love
            building user-friendly and high-performance applications that are
            not only functional but also enjoyable to use.
            <br />
            <br />
            For me, the user always comes first – I strive to create intuitive
            interfaces and smooth user experiences. I enjoy collaborating with
            teams, exchanging ideas, and finding pragmatic solutions to
            technical challenges.
            <br />
            <br />
            If you're looking for a passionate web developer with an eye for
            detail, I'd love to hear from you!
          </div>

          <div className="skills">
            <h4>LANGUAGES</h4>
            <ul className="skillList">
              {languages.map((el) => (
                <li key={el.id}>
                  {el.name}{" "}
                  <div className="skill-level">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className={index < el.lvl ? "level-box" : "filler-box"}
                      ></div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <h4>LIBRARIES</h4>
            <ul className="skillList">
              {libraries.map((el) => (
                <li key={el.id}>
                  {el.name}{" "}
                  <div className="skill-level">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className={index < el.lvl ? "level-box" : "filler-box"}
                      ></div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <h4>BACKEND</h4>
            <ul className="skillList">
              {backend.map((el) => (
                <li key={el.id}>
                  {el.name}{" "}
                  <div className="skill-level">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className={index < el.lvl ? "level-box" : "filler-box"}
                      ></div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <h4>TOOLS</h4>
            <ul className="skillList">
              {tools.map((el) => (
                <li key={el.id}>
                  {el.name}{" "}
                  <div className="skill-level">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className={index < el.lvl ? "level-box" : "filler-box"}
                      ></div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <ul></ul>
          </div>

          <div className="quali">
            <h3>Qualifications</h3>
            <ul className="qualiUl">
              {qualis.map((el) => (
                <li key={el.name} className={`qualiLi${el.id}`}>
                  <div className="qualiYear">
                    <span>-</span> {el.year} <span>-</span>
                  </div>
                  <div className="qualiName">{el.name}</div>
                  <div className="qualiInst">{el.institute}</div>
                  <div className="qualiInfo">
                    {el.info.map((ele, index) => (
                      <div key={index}>
                        <p className="infoName">{ele.name}</p>
                        <p className="infoInfo">{ele.info}</p>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="xp">
            <h3>Professional experience</h3>
            <h4>Motognosis GmbH, Berlin</h4>
            <div>
              <span>-</span> 2020 - 2024 <span>-</span>
              <br />Assistence of CEO / project management 
            </div>
            <p>
              - Implementation of the QM for the medical device 'Amsa' according
              to ISO 13485
            </p>
            <p>
              - Establisment of the IT infrastrusture - as well as data and
              quality assurance processes for a study of the Charité with 150
              patients
            </p>
            <p>
              - Development of algorithmic analyses and measurement data
              analyses in medical studies in the field of motion analysis
            </p>

            <h4>Flavia IT-Management GmbH, Kassel</h4>
            <div>
              <span>-</span> 06.2024 - 08.2024 <span>-</span>
              <br />Internship Full-Stack-Developer
            </div>
            <p>
              - Fullstack development in agile SCRUM with TypeScript, Angular, Angular Material, OpenAPI, PostgreSQL, Spring Boot, Java
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
