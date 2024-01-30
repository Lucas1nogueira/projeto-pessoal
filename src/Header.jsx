import React from "react";
import menuIcon from "./menu-icon.png";
import logo from "./logo.png";

function Header(props) {
  return (
    <header className="App-header">
      <img
        src={menuIcon}
        className="App-menu-button"
        alt="menu"
        onClick={props.openMenu}
      />
      <div className="App-title">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>PROJETO PESSOAL</h1>
      </div>
    </header>
  );
}

export default Header;
