import React from 'react';

const DisabledButton = ({ text }) => {
  return (
    <button
      style={{
        backgroundColor: 'white',
        color: '#999',
        border: '2px solid #ccc',
        padding: '12px 20px',
        width: '100%',
        margin: '8px 0',
        borderRadius: '8px',
        fontSize: '16px',
      }}
      disabled
    >
      {text}
    </button>
  );
};

export default DisabledButton;