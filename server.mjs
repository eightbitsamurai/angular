import express from "express";
import cors from "cors";

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

let users = [];
// to run server: node server.mjs

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

app.get('/users', (req, res) => {
    res.json(users);
  });

app.get('/user', (req, res) => {
    res.json(users[users.length - 1]);
  });

app.post('/login', (req, res) => {
    users.push(req.body);
    res.status(201).send();
  });

app.post('/logout', (req, res) => {
  res.status(200).send();
});

app.delete('/posts/:id', (req, res) => {
  res.status(204).send();
});