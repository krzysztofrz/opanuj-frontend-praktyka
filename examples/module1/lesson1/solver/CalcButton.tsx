import React, { ReactNode } from 'react';

interface CalcButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const CalcButton: React.FC<CalcButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CalcButton;
