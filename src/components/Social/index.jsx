import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Social() {
  return (
    <ul className="social">
      <li>
        <a
          href="https://www.linkedin.com/in/mariano-jr/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin size={25} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Mariano-JR"
          rel="noreferrer"
          target="_blank"
        >
          <BsGithub size={25} />
        </a>
      </li>
    </ul>
  );
}
