import express from "express";

const app = express();
const port = 8000;

let id = 1;

app.use((req, res, next) => {
  if (id === 1) {
    console.log("User logged in");
    next();
  } else {
    res.status(401).send("Error: User not logged in");
  }
});

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log("Server running on port 8000");
});