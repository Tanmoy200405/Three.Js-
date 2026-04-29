import React from 'react';


const App = () => {
  const [showText, setShowText] = React.useState(true);
  const toggleText = () => setShowText(!showText);
  return (
    <div>
      <button onClick={toggleText}>Toggle</button>
      {showText?<h1>Text</h1>:""}
    </div>
  );
}

export default App;
