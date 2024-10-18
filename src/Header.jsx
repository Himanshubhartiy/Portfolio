import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Use Link instead of anchor tags for internal navigation */}
          <Link to="/" className="navbar-brand">
            Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-2 rounded-pill px-3">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item me-2 rounded-pill px-3">
                <a className="nav-link" href="#about__section">
                  About Me
                </a>
              </li>
              <li className="nav-item me-2 rounded-pill px-3">
                <a className="nav-link" href="#project__section">
                  Projects
                </a>
              </li>
              <li className="nav-item me-2 rounded-pill px-3">
                <a className="nav-link" href="#skill__section">
                  Skills
                </a>
              </li>
              <li className="nav-item me-2 rounded-pill px-3">
                <a className="nav-link" href="#contact__section">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
