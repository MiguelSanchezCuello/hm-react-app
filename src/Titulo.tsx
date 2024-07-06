function Titulo() {
  const nombre = "Miguelito Feliz";
  if (nombre != "") {
    return <h1>Hola {nombre}</h1>;
  } else {
    return <p>Hola mundo.</p>;
  }
}

export default Titulo;
