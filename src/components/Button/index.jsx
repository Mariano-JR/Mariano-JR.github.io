import React from "react";

export default function Button({ placeholder, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button>{placeholder}</button>
    </a>
  );
}
