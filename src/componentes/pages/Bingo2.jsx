import React, { useState, useEffect } from 'react';
import '../../styles/bingo.css';

function Bingo2() {
  const [vermelhos, setVermelhos] = useState(initializeState());
  const [ultimaDivClicada, setUltimaDivClicada] = useState('');
  const [winnArray, setWinnArray] = useState('');

  let cartela1 = [
    [1, 15, 36, 50, 65],
    [12, 24, 60, 74, 90],
    [2, 11, 22, 32, 69],

    [10, 25, 46, 64, 75],
    [16, 29, 40, 76, 81],
    [2, 11, 22, 32, 69],

    [1, 15, 36, 50, 65],
    [12, 24, 60, 74, 90],
    [2, 11, 22, 32, 69],
  ];
  let num2 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  let num3 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
  let num4 = [1, 2, 3, 4, 5, 6, 60, 68, 69, 90, 11, 12, 13, 14, 15];
  let num5 = [66, 77, 88, 19, 20, 21, 22, 43, 34, 25, 16, 27, 28, 29, 30];
  let num6 = [31, 32, 33, 34, 35, 36, 37, 78, 39, 40, 41, 62, 63, 84, 75];
  let num7 = [11, 42, 73, 4, 5, 6, 60, 68, 69, 90, 11, 12, 13, 14, 56];
  let num8 = [66, 77, 88, 19, 20, 21, 22, 43, 34, 25, 16, 27, 28, 29, 30];
  let num9 = [61, 52, 53, 84, 35, 36, 37, 78, 39, 40, 41, 62, 63, 84, 75];

  function initializeState() {
    const initialState = {};
    for (let i = 1; i <= 90; i++) {
      initialState[`div${i}`] = 'op2';
    }
    return initialState;
  }

  const handleClick = (div) => {
    setVermelhos((prevState) => {
      const newState = {
        ...prevState,
        [div]: prevState[div] === 'op1' ? 'op2' : 'op1',
      };
      checkWinner(newState, div);
      return newState;
    });
  };

  const checkWinner = (currentVermelhos, lastClickedDiv) => {
    const numerosSorteados = [];
    for (let i = 1; i <= 90; i++) {
      if (currentVermelhos[`div${i}`] === 'op1') {
        numerosSorteados.push(i);
      }
    }

    if (cartela1.every((numero) => numerosSorteados.includes(numero))) {
      setWinnArray('Cartela 1');
    } else if (num2.every((numero) => numerosSorteados.includes(numero))) {
      setWinnArray('Cartela 1');
    } else if (num3.every((numero) => numerosSorteados.includes(numero))) {
      setWinnArray('Cartela 1');
    } else if (num4.every((numero) => numerosSorteados.includes(numero))) {
      setWinnArray('Cartela 2');
    } else if (num5.every((numero) => numerosSorteados.includes(numero))) {
      setWinnArray('Cartela 2');
    } else if (num6.every((numero) => numerosSorteados.includes(numero))) {
      setWinnArray('Cartela 2');
    } else if (num7.every((numero) => numerosSorteados.includes(numero))) {
      setWinnArray('Cartela 3');
    } else if (num8.every((numero) => numerosSorteados.includes(numero))) {
      setWinnArray('Cartela 3');
    } else if (num9.every((numero) => numerosSorteados.includes(numero))) {
      setWinnArray('Cartela 3');
    } else {
      setWinnArray('');
    }
    setUltimaDivClicada(lastClickedDiv);
  };

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

  useEffect(() => {
    setVermelhos(initializeState());
  }, []);

  return (
    <div className='App'>
      <div className='ctnFlex'>{renderDivs()}</div>
      <p>Última bola cantada: {ultimaDivClicada}</p>
      {winnArray && <p>{winnArray} winn!</p>}
    </div>
  );
}

export default Bingo2;
