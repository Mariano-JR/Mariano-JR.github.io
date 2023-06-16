import React from "react";

export default function Presentation({ foto }) {
  return (
    <div className="presentation">
      <h1>
        I'm a web developer focused on Full Stack where I use ReactJS and Golang
        in my applications
      </h1>
      <img src={foto} alt="Profile" />
    </div>
  );
}
