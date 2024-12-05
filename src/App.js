import React from 'react';
import './App.css';
// import Button from './components/Button';
// import OutlinedButton from './components/OutlinedButton';
// import LoadingButton from './components/LoadingButton';
// import DisabledButton from './components/DisabledButton';

function App() {
  return (
    <div style={{height:"100%",backgroundSize:"cover"}}>
    <div style={{ display:"flex",flexDirection:"column",gap:"20px",padding: '20px',alignItems:"center" }}>
      <button className='button-one'>Hello</button>
      <button className='button-two'>Hello</button>
      <button className='button-three'>Hello</button>
      <button className='button-four'>Hello</button>
      <button className='button-five'>Hello</button>
      <button className='button-six'>Hello</button>
      <button className='button-seven'>Hello</button>
      <button className='button-eight'>Disabled</button>
      <button className='button-nine'>Custom inner view </button>
    </div>
    </div>
  );
}

export default App;
