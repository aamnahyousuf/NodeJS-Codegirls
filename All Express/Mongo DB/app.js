import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const PORT = 8000;

app.use(express.json());

const url = "mongodb://aamnahyousuf56_db_user:codegirls56@ac-bluy4ii-shard-00-00.nm3qeyc.mongodb.net:27017,ac-bluy4ii-shard-00-01.nm3qeyc.mongodb.net:27017,ac-bluy4ii-shard-00-02.nm3qeyc.mongodb.net:27017/codegirls?ssl=true&authSource=admin";

const client = new MongoClient(url);
let db;

async function connectDB() {
  await client.connect();
  db = client.db("codegirls");
  console.log("Connected to MongoDB");
}

app.post("/add", async (req, res) => {
  const data = req.body;
  await db.collection("aamnah").insertOne(data);
  res.json({ message: "Data added!", data });
});

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running at ${PORT}`));
});