function About() {
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

        <div className="skills">skills</div>

        <div className="quali">
          <h3>Qualifications</h3>
          <ul>
            <li>
              - 2009 -
              <br />
              Bachelore of Arts - Social Work
              <br />
              Hochschule Niederrhein
            </li>
            <li>
              - 2024 -
              <br />
              Basic Python Training
              <br />
              creating simple programmes in python
            </li>
            <li>
              - 2025 -
              <br />
              WebDev Training
              <br />
              CSS/HTML, Javascript, React and much more ...
            </li>
          </ul>
        </div>
        <div className="xp">
          <h3>Professional experience</h3>
          <h4>Motognosis GmbH</h4>
          <p>2020 - 2024</p>
          <p>
            Implementation of the QM for the medical device 'Amsa' according to
            ISO 13485
          </p>
          <p>
            Establisment of the IT infrastrusture - as well as data and quality
            assurance processes for a study of the Charité with 150 patients
          </p>
          <p>
            Development of algorithmic analyses and measurement data analyses in
            medical studies in the field of motion analysis
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
