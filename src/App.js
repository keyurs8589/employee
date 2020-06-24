import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './styles/custom.css';
import EmpRecruit from './components/EmpRecruit';
import { Provider } from 'react-redux';
import store from './employeeRedux/store';

const App = () => {
  const [mainFlag, setMainFlag] = useState(false);
  const onRecHandler = () => {
    setMainFlag(!mainFlag);
  };
  const onSubmit = (finalData) => {
    console.log(finalData);
    onRecHandler();
  };
  return (
    <Provider store={store}>
      <Button onClick={onRecHandler}>Employee recruitment</Button>
      {mainFlag && <EmpRecruit onSubmit={onSubmit} />}
    </Provider>
  );
};

export default App;
