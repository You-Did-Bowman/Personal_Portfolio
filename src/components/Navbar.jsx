function Navbar() {
  return (
    <>
      <div className="navContainer">
        <div className="navbar">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#cv" className="nav-link">
            CV
          </a>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
