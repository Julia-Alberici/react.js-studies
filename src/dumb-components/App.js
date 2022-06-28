import Button from "./Components/Button";
import Calculadora from "./Components/Calculadora";
import { useState } from "react";

function App() {
  const handleClick = () => console.log("Olá! Sou um Dumb Component");

  const [inputValue, setInputValue] = useState(" ");
  const handleChange = (e) => {
    let inValue = "";
    inValue += e.target.value;
    setInputValue(inValue);
  };

  return (
    <>
      <Button onClick={handleClick}>Dumb</Button>
      <div>
        <h1>Valor: {inputValue}</h1>
        <Calculadora onChange={handleChange} />
      </div>
    </>
  );
}

export default App;
