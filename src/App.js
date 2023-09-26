import React, { useState } from "react";

export const App = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{name}</h1>
      <h3>Contador = {count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  );
};
