import React from 'react';
import './App.css';
import Form from './Form/Form';
import CardWeather from './CardWeather/CardWeather';

function App() {

  return (
    <div className="App">
      <h2 className='weatherTitle'>Weather</h2>
      <Form />
      <CardWeather />
    </div>
  );
}

export default App;
