import React, { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    setCount(storedCount)
  },[]);
  useEffect(() => {
    localStorage.setItem('count', count);
},[count])
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
