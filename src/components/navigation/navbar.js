import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "../../App.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="container">
        <div className="navbar-content py-1">
          <div className="navbar-end-cluster">
            <Link to="/" className="nav-link">
              Gallery
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <a
              className="navbar-github-link"
              href="https://github.com/Avida2C"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Avida2C on GitHub (opens in a new tab)"
            >
              <FaGithub aria-hidden="true" size={36} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
