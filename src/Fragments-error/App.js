import { Fragment } from "react";

const store = [
  {
    type: "Roupa",
  },
  {
    type: "Calçado",
  },
  {
    type: "Chapéu",
  },
];

//para acionar o errorBoundary troque 'type' para algo como type.name.console
function Column({ type }) {
  return (
    <tr>
      <td>{type}</td>
    </tr>
  );
}

function App() {
  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column type={element.type} />
    </Fragment>
  );

  return <table>{store.map(renderColumns)}</table>;
}

export default App;
