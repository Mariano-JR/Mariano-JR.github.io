import { useState } from "react";
import "./Header.css";
import Sidebar from "./Sidebar";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {

  const [ width, setWidth ] = useState(window.innerWidth)

  window.addEventListener('resize', () => setWidth(window.innerWidth))

  return (
      <>
        {width <= 1040 
          ? <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> 
          : <HeaderDesktop/>
        }
      </>
  );
}
