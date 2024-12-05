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
      {/* <Button text="Hello" color="#FFC107" />
      <Button text="Hello" color="#FF9800" />
      <Button text="Hello" color="#F44336" />
      <Button text="Hello" color="#00BCD4" />
      <Button text="Hello" color="#4CAF50" />
      <Button text="Hello" color="#2196F3" />
      <Button text="Hello" color="#9C27B0" />
      <OutlinedButton text="Hello" color="#9C27B0" />
      <LoadingButton />
      <DisabledButton text="Disabled" />
      <OutlinedButton text="Custom inner view" color="#000" /> */}
    </div>
    </div>
  );
}

export default App;
