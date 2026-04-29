import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <Card cardName="Tanmoy Mukherjee" cardAge={21} cardJob="Engineer" />
      <br />
      <Card cardName="John Doe" cardAge={30} cardJob="Designer" />
      <br />
      <Card cardName="Jane Smith" cardAge={25} cardJob="Developer" />
    </div>
  );
}

export default App;