import React, { useState } from "react";

import stone from "./assets/stone.png";
import "./App.css";

import Mejoras from "./Mejoras";

function App() {
  const [rocas, setRocas] = useState(1);

  function rockClick() {
    setRocas(rocas + 1);
    console.log(rocas);
    document.getElementById("timesClicked").innerText = rocas;
  }

  return (
    <div className="app">
      <header>
        <h1>
          {" "}
          <span id="timesClicked"> 0 </span> rocas{" "}
        </h1>
      </header>
      <main>
        <img onClick={rockClick} className="stone" src={stone} alt="stone" />
      </main>
      <Mejoras rocas={rocas} />
    </div>
  );
}

export default App;
