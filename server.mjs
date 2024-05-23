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

app.get('/users', (req, res) => {
    res.json(users);
  });

app.post('/login', (req, res) => {
    users.push(req.body);
    res.status(201).send();
  });