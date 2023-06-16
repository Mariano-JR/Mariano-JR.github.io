import React from 'react'
import Social from "components/Social";
import Button from "components/Button";

export default function HeaderDesktop() {
  return (
    <header>
    <div className="header">
      <div className="linguage">
        <ul>
          <li>
            <a href="/">English</a>
          </li>
          <li>
            <a href="/">Português</a>
          </li>
        </ul>
      </div>

      <h2>Mariano Júnior</h2>

      <div className="social">
        <Social />
        <Button
          link="mailto:mariano_br123@hotmail.com"
          placeholder="Contact"
        />
      </div>
    </div>
  </header>
  )
}
