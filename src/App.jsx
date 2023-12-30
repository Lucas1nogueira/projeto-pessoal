import { useState } from "react";
import "./App.css";
import Header from "./Header";
import MenuLateral from "./MenuLateral";
import ConteudoInicio from "./ConteudoInicio";

function App() {
  const [menu, setMenu] = useState(false);

  function abrirMenuLateral() {
    setMenu(true);
  }

  function fecharMenuLateral() {
    setMenu(false);
  }

  return (
    <div className="App">
      {menu && <MenuLateral fecharMenu={fecharMenuLateral} />}
      <Header abrirMenu={abrirMenuLateral} />
      <ConteudoInicio />
    </div>
  );
}

export default App;
