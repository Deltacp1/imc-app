import React from 'react';
import './imc_page.css';

function imc_page({ onBacktoHome }){
    return (
        <div className='imc-page'>

            {/* botao de voltar pagina inicial */}
            <button className='back-button' onClick={onBacktoHome}>
                Voltar
            </button>

            <h1>Calculadora de IMC</h1>
            {/*Logica de entrada*/}
        </div>
    );
}

export default imc_page;
