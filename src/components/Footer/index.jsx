import React from "react";
import "./Footer.css";
import Social from "../Social";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <Social/>
        <p>Made in ReactJS by Mariano Júnior</p>
      </div>
    </footer>
  );
}
