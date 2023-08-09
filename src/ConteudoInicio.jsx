import React from "react";
import githubImg from "./github.png";
import javaImg from "./simbolo-java.png";
import pythonImg from "./simbolo-python.png";
import jsImg from "./simbolo-js.jfif";

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
        IFBA e estou atualmente no 5º período.
      </p>
      <p>Sou iniciante nas seguintes linguagens:</p>
      <ul>
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
      </ul>
      <p>
        Também desenvolvo em <b>HTML e CSS</b>, e comecei a ver a biblioteca{" "}
        <b>React</b>, com a qual esse projeto foi feito. Comecei a aprender
        também <b>Node.js</b> e <b>Flutter</b>.
      </p>
      <p>Caso queira conhecer outros projetos, acesse a página abaixo:</p>
      <div className="perfil">
        <img src={githubImg} />
        <a href="https://github.com/Lucas1nogueira">Perfil no GitHub</a>
      </div>
    </div>
  );
}

export default ConteudoInicio;
