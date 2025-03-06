/* 
- Sollte beim hochscrollen, dann am Rand sticken bleiben 
- Hamburger-Menü???
*/

function Navbar() {
  return (
    <>
      <div className="navContainer">
        <div className="navbar">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
          <a href="#cv" className="nav-link">
            Downloads
          </a>
          {/* <a href="#contact" className="nav-link">
            Contact
          </a> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
