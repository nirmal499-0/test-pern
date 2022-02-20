import React, { useState, useEffect } from 'react';

function EditTodo({desc}) {

  const [description, setDescription] = useState(desc.description);

  async function editTodo(e) {
    e.preventDefault();
    try {
      const body = { description };
      console.log(body);
      const result = await fetch('http://localhost:5000/todos/'+desc.id, {
        method: 'PUT',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      });
    } catch (err) {
      console.log(err);
    }
  }

  // useEffect(() => {
  //   getDesc();
  // },[]);
   return (
    <React.Fragment>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${desc.id}`}>
        Open modal
      </button>
      <div class="modal" id={`id${desc.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <input type='text' value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" onClick = {e => editTodo(e)} >EDIT</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>  
  );
}

export default EditTodo;

