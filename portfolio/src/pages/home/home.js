import React from 'react';
import './home.css';
import Menu from '../Menu';
import imagem from '../../assets/1.png';

const tamanhoMenor = {
  width: '500px', 
  height: 'auto', 
  textAlign: 'center',
   
};

const containerStyle = {
  textAlign: 'center', 
};

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="container">
        <h1>Sobre mim</h1>
        <div style={containerStyle}>
        <img src={imagem} style={tamanhoMenor}></img>
        </div>
        <div className='quadrado'>
          <h2>
            Olá! Meu nome é Ana e sou uma jovem desenvolvedora em construção.
            Minhas principais habilidades incluem React, JavaScript e TypeScript,
            e estou atualmente concluindo o curso Técnico de Informática.
            Durante este ano, desenvolvi projetos, como sistemas de contas de
            pagamento, listas de tarefas e utilizei ferramentas como Tailwind, Vite
            e GitHub. Além disso, desenvolvi uma aplicação em JavaScript e React
            voltada para o controle da ansiedade. Meu objetivo é continuar
            crescendo como desenvolvedora, explorar novas tecnologias e aprimorar
            minhas habilidades.
          </h2>
        </div>
      </div>
    </div>
  );
}
