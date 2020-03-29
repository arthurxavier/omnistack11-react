import React from "react";
import Header from "./Header";

function App() {
  let counter = 0;

  function incrementor() {
    counter++;
    console.log(counter);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={incrementor}>Incrementar</button>
    </div>
  );
}

export default App;
