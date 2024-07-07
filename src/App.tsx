import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list: string[] = ["Goku", "Tanjiro", "Miguel"];
  let btnClass: string = "btn btn-primary";

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo :" + elemento);
  };

  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elementos para mostrar"
  );

  const handleClick = () => {
    btnClass = "btn btn-secondary"
  }

  return (
    <Card>
      {/* {list.length !== 0 && "mi lista"}  ejemplo de como funciona un valor falsy */}
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {contenido}
      <button type="button" className={btnClass} onClick={handleClick}>Primary</button>
    </Card>
  );
}

export default App;
