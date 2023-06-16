import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <Menu right>
      <h2>Mariano Júnior</h2>
      <a
        id="home"
        className="menu-item"
        href="https://www.linkedin.com/in/mariano-jr/"
        target="_blank"
        rel="noreferrer"
      >
        Linked-In
      </a>
      <a
        id="about"
        className="menu-item"
        href="https://github.com/Mariano-JR"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <a
        id="contact"
        className="menu-item"
        href="mailto:mariano_br123@hotmail.com"
      >
        Contact
      </a>

      <div id="linguage" className="menu-item">
        <ul>
          <li>
            <a href="/">English</a>
          </li>
          <li>
            <a href="/">Português</a>
          </li>
        </ul>
      </div>
    </Menu>
  );
}
