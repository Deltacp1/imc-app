import React from 'react';
import './App.css';

function App() {
  // Função para gerar números 0 e 1 aleatoriamente
  const generateRandomNumber = () => (Math.random() > 0.5 ? '0' : '1');

  // Cria 100 números para simular a "chuva de código"
  const numbers = Array.from({ length: 100 }, (_, index) => (
    <div
      key={index}
      className="falling-number"
      style={{
        left: `${Math.random() * 300}vw`, // Posição horizontal aleatória
        animationDuration: `${Math.random() * 5 + 3}s`, // Duração da animação aleatória
        animationDelay: `${Math.random() * 2}s`, // Atraso inicial aleatório
      }}
    >
      {generateRandomNumber()}
    </div>
  ));

  return (
    <div className="App">
      {/* Números caindo */}
      <div className="background-effect">{numbers}</div>

      {/* Conteúdo principal */}
      <h1 className="title">IMC Calculator</h1>
      <button className="start-button">Iniciar</button>
    </div>
  );
}

export default App;
