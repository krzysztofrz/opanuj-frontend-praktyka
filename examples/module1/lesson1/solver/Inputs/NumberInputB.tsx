import React from 'react';

interface NumberInputBProps {
  value: number;
  onChange: (value: number) => void;
}

const NumberInputB: React.FC<NumberInputBProps> = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value === 0 ? '' : value}
      className="rounded-md shadow-md p-4"
      onChange={(e) => onChange(parseFloat(e.target.value))}
      placeholder="0"
    />
  );
};

export default NumberInputB;
