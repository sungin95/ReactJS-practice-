import React, { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  console.log('항상 돌아가는 것');
  const iRunOnlyOnce = () => {
    console.log('한번만 돌아감')
  };
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
