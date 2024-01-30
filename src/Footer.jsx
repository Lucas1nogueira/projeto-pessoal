import React from "react";
import devIcon from "./dev-icon.png";

function Header(props) {
  return (
    <footer className="Footer">
      <img src={devIcon} />
      <p>Updated in 2024. Made by me with Vite + React.</p>
    </footer>
  );
}

export default Header;
