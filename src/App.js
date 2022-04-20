import './App.css';
import Button from './Components/Button/Button';
import ButtonClear from './Components/ButtonClear/ButtonClear';
import Input from './Components/Input/Input';
import { useState } from "react"
import { evaluate } from "mathjs"


function App() {

  const [input, setInput] = useState("");
  const addInput = value => {
    setInput(input + value)
  }

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("please introduce a value")
    }

  }

  return (
    <div className="App">
      <div className="calculator">

        <Input input={input} />

        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>

        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>

        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>

        <div className="row">
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={calculateResult}>0</Button>
          <Button handleClick={calculateResult}>.</Button>
          <Button handleClick={calculateResult}>/</Button>
        </div>

        <div className="row">

          <ButtonClear handleClear={() => setInput("")}>
            Clear
          </ButtonClear>
        </div>

      </div>
    </div>);
}

export default App;