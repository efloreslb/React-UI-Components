import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const buttons = [
  {
    text: 1
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

//Why do we need curly braces before calling array???

const App = () => {
  return (
    <div>

      <CalculatorDisplay display={0}/>
      <div>
        {buttons.map((button) => (    
          <NumberButton text={button.text} />
        ))}
      </div>
      <div>
      {symbols.map((symbol) => (    
          <NumberButton text={symbol.text} />
        ))}
      </div>
      <ActionButton />

    </div>
  );
};

export default App;
