import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [colorNumbers, setColorNumbers] = useState([]);

  const randNumbers = () => {
    let new_random = colorNumbers.sort( (c) => .5 - Math.random() );
    setColorNumbers(new_random.filter((f) => f));
  }

  useEffect(() => {
    setColorNumbers(
      [
        {
          number: 1,
          color: '#2c88d9'
        },
        {
          number: 2,
          color: '#d3455b'
        },
        {
          number: 3,
          color: '#897a5f'
        },
        {
          number: 4,
          color: '#ac6363'
        },
      
        {
          number: 5,
          color: '#763ec3'
        },
        {
          number: 7,
          color: '#387968'
        },
        {
          number: 8,
          color: '#6558f5'
        },
        {
          number: 6,
          color: '#53af9f'
        },
        {
          number: 9,
          color: '#4b5c6b'
        }
      ]
    );
  },[])

  return (
    <div className="App">
      <div className="container">
        <div className="masonry-columns">
          { colorNumbers ? (
            colorNumbers.map((b) => {
              return (
                <div key={b.number} className= 'box' style={{background: b.color}} onClick={e => randNumbers(e)}>
                  {b.number}
                </div>
              )
            })
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
