import React, { useState } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState({ msg: "Think of a Question", color: "black" });

  const handleClick = async () => {
    const response = await fetch('/api/eightball');
    const data = await response.json();
    setAnswer(data);
  };

  return (
    <div className="App">
      <div
        className="eight-ball"
        style={{ backgroundColor: answer.color }}
        onClick={handleClick}
      >
        {answer.msg}
      </div>
    </div>
  );
}

export default App;
