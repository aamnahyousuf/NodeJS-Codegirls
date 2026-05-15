import express from "express";
const app = express();
const port = 8000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("this is hello page");
});

app.get("/hi", (req, res) => {
  res.send("this is coming from hi");
});

app.get("/services", (req, res) => {
  const data = {
    name: "Services",
    content: "lorum ipsum lorum ipsum lorum ipsum",
    author: "Adam",
  };
  res.send(data);
});

app.get("/users/:userid", (req, res) => {
  console.log(req.params.userid);

  const data = [
    {
      id: 1,
      name: "Ali",
      bio: "lorum ipsum",
      phone: "+928327837",
    },
    {
      id: 2,
      name: "Ahmed",
      bio: "lorum ipsum",
      phone: "+928327837",
    },
    {
      id: 3,
      name: "Adnan",
      bio: "lorum ipsum",
      phone: "+928327837",
    },
  ];
  res.send(data);
});

app.post("/submitform", (req, res) => {
  res.send(req.body);
});
app.listen(port, () => {
  console.log("our server express is running");
});