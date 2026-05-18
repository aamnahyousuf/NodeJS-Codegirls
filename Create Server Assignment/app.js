import http from "http";

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, "http://localhost:8000");

  const name = parsedUrl.searchParams.get("name");
  const fName = parsedUrl.searchParams.get("fname");

  res.writeHead(200, { "Content-Type": "text/plain" });

  if (!(name && fName)) {
    res.end(
      "Please provide your name and father name like ?name=ali&fname=ali"
    );
  } else if (name === "ali" && fName === "ali") {
    res.end("You are allowed");
  } else {
    res.end("You are not");
  }
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});