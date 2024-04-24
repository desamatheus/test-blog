import React, { useState } from 'react';
import '../../styles/bingo.css';

function Bingo() {
  const [vermelhos, setVermelhos] = useState({});
  const [ultimaDivClicada, setUltimaDivClicada] = useState('');

  // Inicializa o estado para cada div
  const initializeState = () => {
    const initialState = {};
    for (let i = 1; i <= 90; i++) {
      initialState[`div${i}`] = 'op2';
    }
    return initialState;
  };

  // Lida com o clique em cada div e atualiza o estado correspondente
  const handleClick = (div) => {
    setVermelhos((prevState) => ({
      ...prevState,
      [div]: prevState[div] === 'op1' ? 'op2' : 'op1',
    }));
    setUltimaDivClicada(div);
  };

  // Renderiza os números de 1 a 90 dentro das divs
  const renderDivs = () => {
    const divs = [];
    for (let i = 1; i <= 90; i++) {
      divs.push(
        <div
          key={`div${i}`}
          className={`${vermelhos[`div${i}`]} ${
            i % 10 === 1 ? 'newColumn' : ''
          }`}
          onClick={() => handleClick(`div${i}`)}>
          {i}
        </div>
      );
    }
    return divs;
  };

  // Inicializa o estado das divs quando o componente é montado
  React.useEffect(() => {
    setVermelhos(initializeState());
  }, []);

  return (
    <div className='App'>
      <div className='ctnFlex'>{renderDivs()}</div>
      <p> Ultima bola cantada {ultimaDivClicada}</p>
    </div>
  );
}

export default Bingo;
