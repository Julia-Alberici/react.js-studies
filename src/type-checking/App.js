import PetShop from "./PetShop";

function App() {
  let dogsAmount = 7;
  let catsAmount = 15;
  const handleClick = () => console.log("Iniciando banho...");

  return (
    <PetShop
      dogs={dogsAmount}
      cats={catsAmount}
      customers={dogsAmount + catsAmount}
      onClick={handleClick}
      status="Done"
    />
  );
}

export default App;
