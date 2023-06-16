import React from "react";
import sites from "./sites.json";
import Cards from "./Cards";
import "./Projects.css";
import Button from "components/Button";

export default function Projects() {
  return (
    <section className="section-projects">
      <div className="projects">
        <h2>Projects</h2>
        <Cards sites={sites} />
      </div>
      <div className="button">
        <Button link="https://github.com/Mariano-JR?tab=repositories" placeholder="More Projects" />
      </div>
    </section>
  );
}
