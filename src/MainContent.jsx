import React from "react";
import githubIcon from "./github-icon.png";
import cIcon from "./c-icon.png";
import javaIcon from "./java-icon.png";
import pythonIcon from "./python-icon.png";
import jsIcon from "./js-icon.png";
import phpIcon from "./php-icon.png";

function MainContent() {
  return (
    <div className="Main-content">
      <h2>Seja bem-vindo!</h2>
      <p>
        Essa é uma página de apresentação, caso queira saber sobre o que já
        aprendi até agora.
      </p>
      <p>
        Meu nome é Lucas, sou aluno do curso de <b>Análise de Sistemas</b> no
        IFBA, atualmente indo para o 6º período.
      </p>
      <p>Possuo conhecimento nas seguintes linguagens:</p>
      <ul>
        <li>
          <img src={cIcon} alt="Símbolo C" />
          <b>C</b>
        </li>
        <li>
          <img src={javaIcon} alt="Símbolo Java" />
          <b>Java</b>
        </li>
        <li>
          <img src={pythonIcon} alt="Símbolo Python" />
          <b>Python</b>
        </li>
        <li>
          <img src={jsIcon} alt="Símbolo JavaScript" />
          <b>JavaScript</b>
        </li>
        <li>
          <img src={phpIcon} alt="Símbolo PHP" />
          <b>PHP</b>
        </li>
      </ul>
      <p>
        Também desenvolvo em <b>HTML e CSS</b>, bibliotecas <b>React</b> e{" "}
        framework <b>Laravel</b>, bem como <b>React Native</b> e <b>Flutter</b>{" "}
        para mobile, bem como tenho noções básicas em <b>Typescript</b> e{" "}
        <b>Node.js</b>.
      </p>
      <p>Caso queira conhecer outros projetos, acesse a página abaixo:</p>
      <a href="https://github.com/Lucas1nogueira" className="gitHub-profile">
        <img src={githubIcon} />
        <b style={{ color: "#fff", marginLeft: 10 }}>Perfil no GitHub</b>
      </a>
    </div>
  );
}

export default MainContent;
