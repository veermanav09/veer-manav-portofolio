import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar floating-nav">
      <span className="navbar-title">Veer Manav</span>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}