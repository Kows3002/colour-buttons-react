import React from 'react';

const LoadingButton = () => {
  return (
    <button
      style={{
        backgroundColor: 'white',
        color: '#000',
        border: '2px solid #ccc',
        padding: '12px 20px',
        width: '100%',
        margin: '8px 0',
        borderRadius: '8px',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      disabled
    >
      <div
        style={{
          width: '20px',
          height: '20px',
          border: '3px solid #ccc',
          borderTop: '3px solid #000',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
    </button>
  );
};

export default LoadingButton;