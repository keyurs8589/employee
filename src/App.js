import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './styles/custom.css';
import EmpRecruit from './components/EmpRecruit';

function App() {
  const [mainFlag, setMainFlag] = useState(false);
  const onRecHandler = () => {
    setMainFlag(!mainFlag);
  };
  const onSubmit = (finalData) => {
    console.log(finalData);
    onRecHandler();
  };
  return (
    <>
      <Button onClick={onRecHandler}>Employee recruitment</Button>
      {mainFlag && <EmpRecruit onSubmit={onSubmit} />}
    </>
  );
}

export default App;
