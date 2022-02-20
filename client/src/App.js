import React from 'react';
import './App.css';

import InputTodo from  './components/inputTodo';
import ListTodo from  './components/listTodo';

function App() {
  return (
    <React.Fragment>
      <InputTodo />
      <ListTodo />
    </React.Fragment>
  );
}

export default App;
