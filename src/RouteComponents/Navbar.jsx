import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    console.log(location);
  }, [location]);

  function showNavbar() {
    if (location.pathname == "/login") return false;
    return true;
  }

  return (
    <>
      {showNavbar() && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className={`nav-link ${path == "/home" ? "active" : ""}`}
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${path == "/about" ? "active" : ""}`}
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${path == "/contact" ? "active" : ""}`}
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
