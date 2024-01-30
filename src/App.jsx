import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import Aside from "./Aside";
import Footer from "./Footer";

function App() {
  const [menu, setMenu] = useState(false);

  function openSideMenu() {
    setMenu(true);
  }

  function closeSideMenu() {
    setMenu(false);
  }

  return (
    <div className="App">
      {menu && <SideMenu menuStatus={menu} closeMenu={closeSideMenu} />}
      <Header openMenu={openSideMenu} />
      <MainContent />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
