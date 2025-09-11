import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio() {
  const portfolio = [
         {
      id: 5,
      name: "CODEREALM",
      description:
      "Coderealm is an educational role-playing platform designed to teach web development in an engaging, game-like environment. It combines the features of: \n\n - Role-Playing: Players progress through levels and quests.\n - Learning Platform: Structured lessons with theory and practice.\n - Forum: A space to ask questions and collaborate. \n - AI Assistance: Smart hints and code feedback to support learning. \n - Challenges & Hackathons: Competitive coding and team-based problem solving.",
       image:
        "./src/assets/Screenshot1_Landing-page.png",
      webpageLink: "https://coderealm-e7af.onrender.com/",
      githubLink: "https://github.com/You-Did-Bowman/Coderealm-FE",
      technics: ["JavaScript", "SASS", "React.js", "Vite.js", "Threejs", "Monaco-Editor", "AWS", "Nodejs", "Express", "MySQL", "Google Authenticator"],
    },
    {
      id: 1,
      name: "Pokedex",
      description:
        "This responsive page intercepts the PokeApi and uses the data it receives to display in a 'Pokedex'. The english name of one of the more than 1000 Pokemon can be entered in the input field. If you press Enter or the 'Search' button, a picture, the stats and the abilities of the Pokemon are displayed. If the Pokemon cannot be found - because it does not exist or a spelling mistake has been made - a NotFound page will appear with a Ghastly, which will randomly appear on the page and disappear again. ",
      image:
        "https://raw.githubusercontent.com/You-Did-Bowman/Pokedex/main/src/assets/Pokedex_Search-Pokemon.png",
      webpageLink: "https://pokedex-dlii.onrender.com/",
      githubLink: "https://github.com/You-Did-Bowman/Pokedex",
      technics: ["JavaScript", "CSS", "HTML", "React.js", "Vite.js", "PokeApi"],
    },
    {
      id: 2,
      name: "To Do List App",
      description:
        "This project was a group project at the end of the 'Single Page Application' module in my further training at the DCI. Our group consisted of three people. Our group presents an App of To-Do Tasks with some additional features that are not usually inplemented in mobile versions of such sort of apps. The choice was made on basis of the time frame for creating the code, solving issues of combining data from different branches, proper styling and finally deployment of the project on render.",
      image:
        "https://raw.githubusercontent.com/You-Did-Bowman/Project_To-Do-List/refs/heads/main/src/assets/LandingPage-with-tasks.png",
      webpageLink: "https://project-to-do-list-u8kr.onrender.com/",
      githubLink: "https://github.com/You-Did-Bowman/Project_To-Do-List",
      technics: [
        "JavaScript",
        "CSS",
        "HTML",
        "React.js",
        "Vite.js",
        "Router",
        "Context",
        "Localstorage",
      ],
    },
    {
      id: 3,
      name: "RGB Guessing Game",
      description:
        "This game is designed to help you test and improve your knowledge of RGB colour codes. The rules consist of finding the right colour by only being told the RGB colour code. If you guess wrong, the selected tile disappears. However, if you have guessed correctly, all remaining tiles take on the colour you have chosen. There are two difficulty level to choose from.",
      image:
        "https://raw.githubusercontent.com/You-Did-Bowman/RGB_Guessing_Game/main/assets/Screenshot_RGB_HARD.png",
      webpageLink: "https://you-did-bowman.github.io/RGB_Guessing_Game/",
      githubLink: "https://github.com/You-Did-Bowman/RGB_Guessing_Game",
      technics: ["JavaScript", "CSS", "HTML"],
    },
    ,
    {
      id: 4,
      name: "MASTERMIND CLI-Game ",
      description: `This was my final project for the “Programming Basics” module at my school. This game only works inside the Terminal. In Mastermind, the coder creates a secret number combination that the decryptor must guess. After each attempt, the decryptor gets feedback with 🔴, 🟡 and 🟢. The decryptor has to find out the combination in as few attempts as possible.`,
      image:
        "https://raw.githubusercontent.com/You-Did-Bowman/MASTERMIND_digital/main/images/Screenshot_Mastermind_instructions.png",
      webpageLink: "",
      githubLink: "https://github.com/You-Did-Bowman/MASTERMIND_digital",
      technics: ["JavaScript", "npm chalk", "prompt-sync"],
    },
  ];

  return (
    <div className="portWrapper">
      <div className="portfolioContainer">
        <h2>Portfolio</h2>
        <div className="cards">
          {portfolio.map((proj) => (
            <div key={proj.id} className="cardItem">
              <img className="d-block w-100" src={proj.image} alt={proj.name} />
              <div className="caption">
                <h3>{proj.name}</h3>
                <p className="portDesc">{proj.description}</p>
                <ul className="cardList">
                  {" "}
                  {proj.technics.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
                <p>
                  <a className="portLink" href={proj.webpageLink} target="blank">
                    {proj.name}
                  </a>
                </p>
                <p>
                  <a className="portLink" href={proj.githubLink} target="blank">
                    GitHub Repo
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
