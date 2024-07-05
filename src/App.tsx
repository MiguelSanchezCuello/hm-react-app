function App() {
  const nombre = "Miguelito Feliz";
  if (nombre != "") {
    return <p>Hola {nombre}</p>;
  } else {
    return <p>Hola mundo.</p>;
  }
}

export default App;
