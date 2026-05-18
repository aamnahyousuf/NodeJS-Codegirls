const http = require("http");

const server = http.createServer((req, res) => {

  res.writeHead(200, { "Content-Type": "text/plain" });

});
server.listen(8000, () => {
  console.log("Server Created!");
});