// to run server: node server.mjs
import express from "express";
import cors from "cors";

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

let users = [];

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/allUsers', (req, res) => {
  res.json(users);
});

app.post('/register', (req, res) => {
  users.push(req.body);
  res.status(201).send();
});

app.post('/login', (req, res) => {
  const user = users.filter(u => u.username === req.body.username & u.password === req.body.password)?.[0];
  user ? res.status(200).send(user) : res.status(401).json("Cannot log in");
});

app.post('/logout', (req, res) => {
  res.status(200).send();
});

app.delete('/posts/:id', (req, res) => {
  res.status(204).send();
});