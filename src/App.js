import logo from './logo.svg';
import './App.css';
import Simpsonscard from './Components/Simpsonscard';
import axios from 'axios';
import React, { useState } from 'react';

const sampleSimpsons = 
  {
    quote: "My eyes! The goggles do nothing!",
    character: "Rainier Wolfcastle",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRainierWolfcastle.png?1497567511035",
    characterDirection: "Right"
  }


function App() {
  const [simpsons, setSimpsons] = useState(sampleSimpsons);

  function ChangeQuote() {
    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then((response) => response.data)
    .then((data) => {
      setSimpsons(data[0]);
    });
  }

  return (
    <div className="App">
      <Simpsonscard simpsons={simpsons}/>
      <button type="button" onClick={ChangeQuote}>Change quote</button>
    </div>
  );
}

export default App;
