function Navbar() {
  return (
    <div className="site-header">
      <div className="container">
        <h1> My Awesome Website</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#home"> Home </a>
            </li>
            <li>
              <a href="#about"> About </a>
            </li>
            <li>
              <a href="#contact"> Contact </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
