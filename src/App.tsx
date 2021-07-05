import React from 'react';
import { Calculator } from './Calculator';
import { Button } from './Button';

function App() {
  return (
    <div className="wrapper">
      <Calculator/>
      <Button>Hola</Button>
      <Button disable>Adios!</Button>
    </div>
  );
}

export default App;
