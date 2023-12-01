import React from "react";
import Menu from '../Menu';
import './javascript.css';
import imagem2 from '../../assets/2.png';

const tamanhoMenor = {
  width: '500px', 
  height: 'auto',
};

const containerStyle = {
  textAlign: 'center', 
};

export default function JavaScript() {
  return (
    <div>
      <Menu />
      <h1>JavaScript</h1>
      <div className="texto">
      <p>
        Desenvolvi um aplicativo JavaScript com acesso por meio de login, onde os
        usuários inserem seu email e senha. Após autenticação bem-sucedida, a
        interface exibe opções para técnicas de relaxamento, como a respiração
        quadrada e a técnica 5-4-3-2-1.
      </p>
      <p>
        Além disso, o aplicativo possui uma seção de mensagem de emergência,
        permitindo aos usuários cadastrar um contato de confiança. A
        funcionalidade de acionar esse contato em situações de emergência oferece
        suporte prático e emocional. 
      </p>
      </div>
      <div style={containerStyle}>
      <img src={imagem2} style={tamanhoMenor}></img>
      </div>
    </div>
  );
}
