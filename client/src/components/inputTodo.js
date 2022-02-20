import React, { useState } from 'react';

function InputTodo() {

  const [description, setDescription] = useState("");

  async function onSubmitForm (e) {
    e.preventDefault();
    try {
      const body = { description };
      const result = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <React.Fragment>
      <h1 className = 'text-center mt-5'>TODO's</h1>
      <form className = 'd-flex mt-5' onSubmit={onSubmitForm}>
        <input type = 'text' className = 'from-control' value={description} onChange = {e => setDescription(e.target.value)}/>
        <button className ='btn btn-success'>ADD</button>
      </form>
    </React.Fragment>  
  );
}

export default InputTodo;
