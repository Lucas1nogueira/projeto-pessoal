import React from "react";
import githubImg from "./github.png";
import cImg from "./simbolo-c.png";
import javaImg from "./simbolo-java.png";
import pythonImg from "./simbolo-python.png";
import jsImg from "./simbolo-js.jfif";
import phpImg from "./simbolo-php.svg";

function ConteudoInicio() {
  return (
    <div className="Conteudo-inicio">
      <h2>Seja bem-vindo ao meu projeto pessoal!</h2>
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
          <img src={cImg} alt="Símbolo C" />
          <b>C</b>
        </li>
        <li>
          <img src={javaImg} alt="Símbolo Java" />
          <b>Java</b>
        </li>
        <li>
          <img src={pythonImg} alt="Símbolo Python" />
          <b>Python</b>
        </li>
        <li>
          <img src={jsImg} alt="Símbolo JavaScript" />
          <b>JavaScript</b>
        </li>
        <li>
          <img src={phpImg} alt="Símbolo PHP" />
          <b>PHP</b>
        </li>
      </ul>
      <p>
        Também desenvolvo em <b>HTML e CSS</b>, e desenvolvo também utilizando
        a biblioteca <b>React</b> e o framework <b>Laravel</b>. Possuo
        conhecimento também em <b>React Native</b> e <b>Flutter</b> para mobile,
        bem como tenho noções básicas em <b>Typescript</b> e <b>Node.js</b>.
      </p>
      <p>Caso queira conhecer outros projetos, acesse a página abaixo:</p>
      <a href="https://github.com/Lucas1nogueira" className="perfil">
        <img src={githubImg} />
        <b style={{color: "#fff", marginLeft: 10}}>Perfil no GitHub</b>
      </a>
    </div>
  );
}

export default ConteudoInicio;
