import React, { useState, useEffect } from 'react';

import EditTodo from './editTodo'

function ListTodo() {

  const [description, setDescription] = useState([]);

  async function getTodos() {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const data = await response.json();
      setDescription(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteTodo( id ) {
    try {
      const result = await fetch('http://localhost:5000/todos/'+id,{
        method: 'DELETE'
      });
      console.log(result);
      setDescription(description.filter( e => e.id != id));
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getTodos();
  },[]);

  return (
    <React.Fragment>
    <table class = ' table mt-5'>
      <tr>
        <th>Description</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
      {description.map( desc => (
        <tr key={desc.id}>
          <td>{desc.description}</td>
          <td><EditTodo desc={desc}/></td>
          <td onClick={() => deleteTodo(desc.id)}>DEL</td>
        </tr>
      ))}
    </table>
    </React.Fragment>  
  );
}

export default ListTodo;

