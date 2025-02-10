import React, { useState } from 'react';
import './App.css';
import imc_page from './imc_page';

function App() {
  // Estado para controlar se a página da calculadora vai ser exibida
  const [showCalculator, setShowCalculator] = useState(false);

  // função para voltar pra pagina inicial
  const handleBacktoHome = () => {
    setShowCalculator(false);
  };

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
      {/* renderizacao condicional*/}
      {showCalculator ? (
        //exibe a calculadora de imc
        <imc_page onBacktoHome = {handleBacktoHome}/>
      ) : (
        //exibe pagina inicial
        <>
          <div className="background-effect">{numbers}</div>
          <div className="home-page">
            <h1 className="title">IMC_Calculator</h1>
            <button
              className="start-button"
              onClick={() => setShowCalculator(true)}  // Altera o estado ao clicar no botao
            >
            Iniciar
          </button>
          </div>
        </>  
      )}
    </div>
  );
}

export default App;
