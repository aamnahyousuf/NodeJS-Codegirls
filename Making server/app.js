const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true = parse query
  const age = parsedUrl.query.age;

  res.writeHead(200, { "Content-Type": "text/plain" });

  if (!age) {
    res.end("Please provide age in query like ?age=17");
  } else if (age < 18) {
    res.end("You are under 18 ");
  } else {
    res.end("You are allowed ");
  }
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});