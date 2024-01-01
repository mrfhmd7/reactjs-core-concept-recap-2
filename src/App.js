// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name="Natore" special="Kacha Golla"></District>
      <District name="Rajshahi" special="Mango"></District>
      <District name="Bogura" special="Doi"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightBlue',
  margin: '15px',
  padding: '10px',
  borderRadius: '10px',
}

function District(props) {

  const [power, setPower] = useState(1);
  
  const handlePower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Famous for: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={handlePower}>Boost the power</button>
    </div>
  )
}

export default App;
