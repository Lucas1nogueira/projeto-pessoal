import React from 'react';
import menuImg from './menu.png';
import projetoImg from './projeto.png';

function Header(props) {

    return (
        <header className="App-header">
            <img src={menuImg} className="App-botao-menu" alt="menu" onClick={props.abrirMenu} />
            <div>
                <img src={projetoImg} className="App-logo" alt="logo" />
                <h1>Projeto Pessoal</h1>
            </div>
        </header>
    )

}

export default Header;