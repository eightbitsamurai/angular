// to run server: node server.mjs
import express from "express";
import cors from "cors";

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let blogPosts = [
  {
    id: 1,
    username: "Test user",
    title: "First post",
    body: "Hello world!"
  }
];
let currentPostId = 2;

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

app.get('/blog-posts', (req, res) => {
  const sortedBlogPosts = blogPosts.sort((a, b) => b.id - a.id);
  res.json(sortedBlogPosts);
});

app.post('/blog-posts/new', (req, res) => {
  const post = {
    id: currentPostId,
    username: req.body.username,
    title: req.body.title,
    body: req.body.body
  }
  blogPosts.push(post);
  currentPostId++;
  res.status(201).send();
});

app.put('/blog-posts/:id', (req, res) => {
  let posts = blogPosts.filter(p => p.id !== parseInt(req.params.id))
  posts.push(req.body);
  blogPosts = posts;
  res.status(200).send();
});

app.delete('/blog-posts/:id', (req, res) => {
  let posts = blogPosts.filter(p => p.id !== parseInt(req.params.id))
  blogPosts = posts;
  res.status(200).send();
});