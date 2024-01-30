import React from "react";
import closeIcon from "./close-icon.png";

function SideMenu(props) {
  return (
    <div className="Menu-background">
      <div className="Side-menu">
        <img src={closeIcon} onClick={props.closeMenu} />
        <ul>
          <li>
            <a href="https://github.com/Lucas1nogueira">Perfil no GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
