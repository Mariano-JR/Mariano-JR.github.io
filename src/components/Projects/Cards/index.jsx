import React from "react";
import Project from "./Card";

export default function Cards({ sites }) {
  return (
    <ul className="cards">
      {sites.map((site) => {
        return (
          <Project
            key={site.id}
            name={site.nome}
            link={site.url}
            description={site.descricao}
            image={site.image}
          />
        );
      })}
    </ul>
  );
}
