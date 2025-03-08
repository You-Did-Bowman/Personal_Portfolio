/* 
- Skills mit gelben quadraten darstellen. höchstens 5 ... leere quadrate vllt grau?
- return noch in weiter Components zerpflücken?
*/

function About() {
  const skills = [
    { id: 1, name: "JAVASCRIPT", lvl: 5, type: "language" },
    { id: 2, name: "CSS", lvl: 4, type: "language" },
    { id: 3, name: "HTML", lvl: 5, type: "language" },
    { id: 4, name: "PYTHON", lvl: 2, type: "language" },
    { id: 5, name: "REACT", lvl: 4, type: "library" },
    { id: 6, name: "NODE", lvl: 3, type: "tools" },
    { id: 7, name: "MONGODB", lvl: 2, type: "backend" },
    { id: 8, name: "SASS", lvl: 4, type: "tools" },
    { id: 9, name: "BOOTSTRAP", lvl: 3, type: "library" },
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
          info: "- DOM, APIs, JSON, React.js, JSX templating",
        },
        {
          name: "Backend (9 weeks)",
          info: "- Node.js, Express.js, NOSQL, SQL, MongoDB",
        },
        {
          name: "Final Project (9 weeks)",
          info: "- plan, create and present a software project",
        },
        { name: "Internship (9 weeks)", info: "" },
      ],
    },
    {
      id: 1,
      year: 2025,
      name: "Basic Python Training",
      institute: "VHS Brandenburg a. d. Havel",
      info: [
        { name: "", info: "- functions, variables, operators, loops and arrays" },
        { name: "", info: "- classes, constructors and destructors, simple and complex inheritance, polymophism" },
        { name: "", info: "- create simple programs" },
      ],
    },
    {
      id: 1,
      year: 2025,
      name: "Bachelor of Arts - Social Work",
      institute: "Hochschule Niederrhein",
      info: [{name: "", info: ""}],
    },
  ];

  return (
    <>
      <div className="aboutContainer">
        <h2>About</h2>

        <div className="photo"></div>

        <div className="facts">
          <h3>Facts</h3>
          <ul>
            <div className="facts_ul">
              <li>Name:</li>
              <li>Judith Bohmann</li>
            </div>

            <div className="facts_ul">
              <li>Based in:</li>
              <li>Potsdam, Germany</li>
            </div>

            <div className="facts_ul">
              <li>Mail:</li>
              <li>ju.bohmann@gmx.de</li>
            </div>

            <div className="facts_ul">
              <li>Mobile:</li>
              <li>+49 176 61 89 74 52 </li>
            </div>
          </ul>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <h4>LANGUAGES</h4>
          <ul className="skillList">
            {languages.map((el) => (
              <li key={el.id}>
                {el.name}{" "}
                <div className="skill-level">
                  {Array.from({ length: el.lvl }).map((_, index) => (
                    <div key={index} className="level-box"></div>
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
                  {Array.from({ length: el.lvl }).map((_, index) => (
                    <div key={index} className="level-box"></div>
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
                  {Array.from({ length: el.lvl }).map((_, index) => (
                    <div key={index} className="level-box"></div>
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
                  {Array.from({ length: el.lvl }).map((_, index) => (
                    <div key={index} className="level-box"></div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <ul></ul>
        </div>

        <div className="quali">
          <h3>Qualifications</h3>
          <ul>
            {qualis.map((el) => (
              <li key={el.name}>
                <div className="qualiYear">
                  <span>-</span> {el.year} <span>-</span>
                </div>
                <div className="qualiName">{el.name}</div>
                <div className="qualiInst">{el.institute}</div>
                <div className="qualiInfo">
                  {el.info.map((ele, index) => (
                    <div key = {index}>
                    <p className = "infoName">{ele.name}</p>
                    <p className = "infoInfo">{ele.info}</p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="xp">
          <h3>Professional experience</h3>
          <h4>Motognosis GmbH</h4>
          <div><span>-</span> 2020 - 2024 <span>-</span></div>
          <p>
            - Implementation of the QM for the medical device 'Amsa' according to
            ISO 13485
          </p>
          <p>
            - Establisment of the IT infrastrusture - as well as data and quality
            assurance processes for a study of the Charité with 150 patients
          </p>
          <p>
            - Development of algorithmic analyses and measurement data analyses in
            medical studies in the field of motion analysis
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
