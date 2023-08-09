import React from 'react';
import fecharImg from './fechar.png';

function MenuLateral(props) {

    return (
        <div id="Menu-lateral">
            <img src={fecharImg} onClick={props.fecharMenu}/>
            <ul>
                <li>
                    <a href="https://github.com/Lucas1nogueira">Perfil no GitHub</a>
                </li>
            </ul>
        </div>
    )

}

export default MenuLateral;