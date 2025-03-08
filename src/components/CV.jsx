function CV() {
  const downloads = [
    { title: "CV", link: "/downloads/CV_Bohmann, Judith.pdf" },
    { title: "Job reference: Motognosis GmbH (German)", link: "/downloads/2024_Arbeitszeugnis_Motognosis_Bohmann, Judith.pdf" },
    { title: "Certificate: Fullstack-Webdeveloper (German)", link: "/downloads/TN-Bestätigung_Bohmann,Judith_FbW WD 24-E06.pdf" },
    { title: "Certificate: Python Course (German)", link: "/downloads/2024_Teilnahmebescheinigung_Programmieren mit Pyhton_Bohmann, Judith.pdf" },
  ];
  return (
    <div className = "cvWrapper">
      <div className="cvContainer">
        <h2>Downloads</h2>
        <ul>
          {downloads.map((el, index) => (
            <li key = {index}>
<a
              href={el.link}
              target="blank"
            >
              {el.title}
            </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CV;
