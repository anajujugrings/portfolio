import React from "react";
import Menu from '../Menu';
import '../javascript/javascript.css';
import imagem4 from '../../assets/4.png';

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
      <h1>React</h1>
      <div className="texto">
        <p>
          O React é conhecido por sua abordagem inovadora na construção de interfaces de usuário reativas, destacando-se por seus principais conceitos.
        </p>
        <p>
          <strong>Componentização:</strong> React se baseia na criação de componentes reutilizáveis, promovendo uma arquitetura modular que facilita a manutenção e reutilização de código.
        </p>
        <p>
          <strong>Props e Estado:</strong> Utilizando "props" para transferir dados entre componentes e "estado" interno para atualizações dinâmicas, React permite a construção de interfaces interativas e responsivas.
        </p>
        <p>
          <strong>Renderização Condicional:</strong> A renderização condicional no React possibilita a exibição dinâmica de componentes com base em condições específicas, tornando a interface mais adaptável.
        </p>
        <p>
          <strong>Manipulação de Eventos:</strong> React simplifica a manipulação de eventos, tornando fácil responder a ações do usuário, desde cliques simples até interações mais complexas.
        </p>
        <p>
          <strong>Stateful e Stateless Components:</strong> A distinção entre componentes com e sem estado simplifica o gerenciamento de dados, permitindo uma estrutura mais clara e compreensível.
        </p>
        <p>
          <strong>React Hooks:</strong> A introdução dos React Hooks simplificou ainda mais a lógica dos componentes funcionais, trazendo recursos de classe para essa abordagem mais concisa.
        </p>
      </div>
      <div style={containerStyle}>
      <img src={imagem4} style={tamanhoMenor}></img>
      </div>
    </div>
  );
}
