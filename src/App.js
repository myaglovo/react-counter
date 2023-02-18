import { React, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const decreaseCount = () => {
    setCount((count) => count - 1);
  };
  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button
          disabled={count === 0 && "true"}
          className="minus"
          onClick={decreaseCount}
        >
          - Минус
        </button>
        <button
          disabled={count >= 10 && "true"}
          className="plus"
          onClick={increaseCount}
        >
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
