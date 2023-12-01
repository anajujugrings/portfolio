import React from "react";
import Menu from '../Menu';
import '../javascript/javascript.css';
import imagem3 from '../../assets/3.png';

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
      <h1>TypeScript</h1>
      <div className="texto">
      <p>
      O TypeScript desempenha um papel fundamental no desenvolvimento moderno ao proporcionar uma abordagem de
       tipagem estática que aprimora a segurança e a manutenibilidade do código. Sua integração com JavaScript 
      oferece aos desenvolvedores um ambiente flexível e atualizado. 
       Esses atributos, aliados à aceitação generalizada, fazem do TypeScript uma  ótima escolha  para 
       projetos de diferentes escalas, promovendo eficiência no desenvolvimento e melhorando a qualidade do código.

      </p>
      <p>
      A clareza proporcionada pela tipagem estática do TypeScript não apenas previne erros comuns durante o 
      desenvolvimento, mas também facilita a compreensão do código, tornando-o mais legível e simplificando 
      processos de manutenção. Essa combinação de segurança, integração flexível e legibilidade contribui
       para a crescente popularidade do TypeScript, posicionando-o como uma ferramenta essencial no arsenal de 
       desenvolvedores modernos.
      </p>
      </div>
      <div style={containerStyle}>
      <img src={imagem3} style={tamanhoMenor}></img>
      </div>
    </div>
  );
}
