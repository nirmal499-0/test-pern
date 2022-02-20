const express = require('express');
const app = express();
var cors = require('cors');
// const pool = require("./db");

//middelware
app.use(cors());
app.use(express.json());

const { Pool } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "perntodo",
  password: "nirmal",
  port: 5432,
};

const pool = new Pool(credentials);

app.post('/todos', async (req, res) => {
  try { 
    const { description } = req.body;
    const result = await pool.query('INSERT INTO todo(description) VALUES($1)', [description]);
    res.json(result.rows);
  }
  catch(err){ 
    console.log(err) 
  }
});

app.get('/todos', async (req, res) => {
  try { 
    const result = await pool.query('SELECT * FROM todo');
    res.json(result.rows);
  }
  catch(err){ 
    console.log(err) 
  }
});

app.get('/todos/:id', async (req, res) => {
  try { 
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM todo WHERE id = $1', [id]);
    res.json(result.rows);
  }
  catch(err){ 
    console.log(err) 
  }
});

app.put('/todos/:id', async (req, res) => {
  try { 
    const { id } = req.params;
    const { description } = req.body;
    const result = await pool.query('UPDATE todo SET description = $1 WHERE id = $2', [description, id]);
    res.json("Updated");
  }
  catch(err){ 
    console.log(err) 
  }
});

app.delete('/todos/:id', async (req, res) => {
  try { 
    const { id } = req.params;
    const result = await pool.query('DELETE FROM todo WHERE id = $1', [id]);
    res.json("deleted");
  }
  catch(err){ 
    console.log(err) 
  }
});
 
app.listen(5000, () => { console.log("SERVER IS UP AND RUNNING ON PORT 3000") });