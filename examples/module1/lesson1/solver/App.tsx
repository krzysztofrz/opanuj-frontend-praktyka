import React, { useState } from 'react';
import { f1, f2, f3, f4 } from './functions';
import CalcButton from './CalcButton';
import NumberInputA from './Inputs/NumberInputA';
import NumberInputB from './Inputs/NumberInputB';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [numC, setNumC] = useState<number | string>(0);

  const doWork = (func: (a: number, b: number) => number) => {
    setNumC(func(numA, numB));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <NumberInputA value={numA} onChange={setNumA} />
        <NumberInputB value={numB} onChange={setNumB} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <CalcButton onClick={() => doWork(f1)}>+</CalcButton>
        <CalcButton onClick={() => doWork(f2)}>-</CalcButton>
        <CalcButton onClick={() => doWork(f3)}>*</CalcButton>
        <CalcButton onClick={() => doWork(f4)}>/</CalcButton>
      </div>
      <div>Result: {numC}</div>
    </div>
  );
};

export default App;
