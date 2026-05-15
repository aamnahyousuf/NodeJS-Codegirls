import http from "http";
import fs from "fs";
import querystring from "querystring";

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {

        fs.readFile("form.html", (err, data) => {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });

    }
 
    else if (req.method === "POST" && req.url === "/submit") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const parsedData = querystring.parse(body);

            const name = parsedData.name;
            const email = parsedData.email;
            const message = parsedData.message;

            fs.readFile("messages.json", (err, data) => {

                let messages = [];

                if (data.length > 0) {
                    messages = JSON.parse(data);
                }

                messages.push({
                    name,
                    email,
                    message
                });

                fs.writeFile(
                    "messages.json",
                    JSON.stringify(messages, null, 2),
                    err => {

                        res.writeHead(200, {
                            "Content-Type": "text/html"
                        });

                        res.end("Message Saved!");
                    }
                );

            });

        });

    }

    // SHOW ALL MESSAGES
    else if (req.method === "GET" && req.url === "/messages") {

        fs.readFile("messages.json", (err, data) => {

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(data);
        });

    }

    // 404
    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end("Page Not Found");

    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});