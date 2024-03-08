const express = require("express");

const app = express();

app.use(express.json());

let currentUser = {
  name: "Bhuvesh",
  age: 24,
  country: "India",
  books: ["Fingersmith", "The Night Watch"],
};

let users = [
  {
    name: "Bhuvesh",
    age: 24,
    country: "India",
    books: ["Fingersmith", "The Night Watch"],
  },
  {
    name: "Himanshu",
    age: 29,
    country: "India",
    books: ["Norwegian Wood", "Kafka on the Shore"],
  },
  {
    name: "Ashish",
    age: 28,
    country: "India",
    books: ["Half of a Yellow Sun", "Americanah"],
  },
];

let books = [
  {
    name: "To Kill a Mockingbird",
    pages: 281,
    title: "Harper Lee",
    price: 12.99,
  },
  {
    name: "The Catcher in the Rye",
    pages: 224,
    title: "J.D. Salinger",
    price: 9.99,
  },
  {
    name: "The Little Prince",
    pages: 85,
    title: "Antoine de Saint-Exupéry",
    price: 7.99,
  },
];

app.get("/current-user", (req, res) => res.json(currentUser));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json(users.find((user) => user.id === id));
});

app.get("/users", (req, res) => res.json(users));

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: editedUser } = req.body;

  users = users.map((user) => (user.id === id ? editedUser : user));

  res.json(users.find((user) => user.id === id));
});

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  res.json(books.find((book) => book.id === id));
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port: ${SERVER_PORT}`)
);
