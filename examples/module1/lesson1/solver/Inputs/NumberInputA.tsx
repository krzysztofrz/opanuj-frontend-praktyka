import React from 'react';

interface NumberInputAProps {
  value: number;
  onChange: (value: number) => void;
}

const NumberInputA: React.FC<NumberInputAProps> = ({ value, onChange }) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value === 0 ? '' : value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      placeholder="0"
    />
  );
};

export default NumberInputA;
