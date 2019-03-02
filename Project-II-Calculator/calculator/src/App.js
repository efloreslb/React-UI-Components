import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const numbers = [
  {
    text: 1,
    style: ("gray")
  },
  {
    text: 2
  },
  {
    text: 3
  },
  {
    text: 4
  },
  {
    text: 5
  },
  {
    text: 6
  },
  {
    text: 7
  },
  {
    text: 8
  },
  {
    text: 9
  }
]

const symbols = [
  {
    text: "%"
  },
  {
    text: "x"
  },
  {
    text: "-"
  },
  {
    text: "+"
  },
  {
    text: "="
  }
]

//Why do we need curly braces before calling array??? - interpolation

const App = () => {
  return (
    <div className="container">
      <div className="calc-display"><CalculatorDisplay display={0} /></div>
      <div className="clear"><ActionButton text={"clear"}/></div>
      <div className="symbols">
        {symbols.map((symbol) => (    
          <NumberButton key={symbol.text} text={symbol.text} buttonStyle={symbol.style}/>
        ))}
      </div>
      <div className="numbers">
        {numbers.map((number) => (    
          <NumberButton key={number.text} text={number.text} buttonStyle={number.style}/>
        ))}
      </div>
      
      <ActionButton text={0}/>

    </div>
  );
};

export default App;
