import { useRef, useEffect, useState } from "react";

function App() {
  const inputRef = useRef();
  const count = useRef(1);
  const [, setValue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      count.current = 300; //Não re-renderiza
      console.log("passou aqui");
      setValue(true); // força a re-renderização
    }, 3000);
  });

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h1>Valor atual: {count.current}</h1>
      Foco: <input ref={inputRef} />
      <button onClick={handleClick}>Focar</button>
    </>
  );
}

export default App;
