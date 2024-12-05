import React from 'react';

const Button = ({ text, color }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: 'white',
        border: 'none',
        padding: '12px 20px',
        width: '100%',
        margin: '8px 0',
        borderRadius: '8px',
        fontSize: '16px',
      }}
    >
      {text}
    </button>
  );
};

export default Button;