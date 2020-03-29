import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementor() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={incrementor}>Incrementar</button>
    </div>
  );
}

export default App;
