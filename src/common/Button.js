import React from 'react';

const Button = ({ children, type, onClick, disabled, className }) => {
  return (
    <button
      className={`bg-transparent rounded ${
        type === 'outline'
          ? 'text-primary border-2 border-primary'
          : 'bg-primary border-2 border-primary text-background'
      } ${
        disabled ? 'opacity-60 cursor-not-allowed' : ''
      } ${className} px-6 py-4`}
      onClick={() => (disabled ? null : onClick())}
    >
      {children}
    </button>
  );
};

export default Button;
