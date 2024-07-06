import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Tanjiro", "Miguel"];
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;
