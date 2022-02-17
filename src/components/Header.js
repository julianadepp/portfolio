import React from "react";
import Resume from "./Resume";

function Header(props) {
  return (
    <div>
        <h1>Juliana Depp</h1>
        <h3>FULL-STACK <br/> SOFTWARE ENGINEER</h3>
        <nav>
          <a href="#about">
            <button className="">About Me</button>
          </a>
          <a href="#projects">
            <button className="">Projects</button>
          </a>
          <a href="#contact">
            <button className="">Contact Me</button>
          </a>
          <Resume />
        </nav>
    </div>
  );
}

export default Header;
