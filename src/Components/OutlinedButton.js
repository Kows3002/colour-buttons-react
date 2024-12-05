import React from 'react';

const OutlinedButton = ({ text, color }) => {
  return (
    <button
      style={{
        backgroundColor: 'white',
        color: color,
        border: `2px solid ${color}`,
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

export default OutlinedButton;