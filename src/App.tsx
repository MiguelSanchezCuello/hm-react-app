import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [data, setData] = useState(["Goku", "Tanjiro", "Miguel"]);

  //   const [isLoading, setIsLoading] = useState(false);
  //   const handleClick = () => setIsLoading(!isLoading);

  //   const list: string[] = ["Goku", "Tanjiro", "Miguel"];

  //   const handleSelect = (elemento: string) => {
  //     console.log("imprimiendo :" + elemento);
  //   };

  //   const contenido = list.length ? (
  //     <List data={list} onSelect={handleSelect} />
  //   ) : (
  //     "Sin elementos para mostrar"
  //   );

  //   return (
  //     <Card>
  //       {/* {list.length !== 0 && "mi lista"}  ejemplo de como funciona un valor falsy */}
  //       <CardBody title="Hola Mundo" text="Este es el texto" />
  //       {contenido}
  //       <Button isLoading={isLoading} onClick={handleClick} >Hola Mundo</Button>
  //     </Card>
  //   );
  //
  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, -1));
  return (
    <Card>
      <Button onClick={addMinion}>Agregar</Button>
      <Button onClick={delMinion}>Eliminar</Button>
      <List data={data}></List>
    </Card>
  );
}

export default App;
