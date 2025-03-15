/* 
- go up links 
- vllt arrays aus components als context?
*/

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import CV from "./components/CV.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Header />

      <Navbar />

      <div id="about">
        <About />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="cv">
        <CV />
      </div>

      {/*    <div id="contact">
        <Contact />
      </div> */}

      <Footer />
    </>
  );
}

export default App;
