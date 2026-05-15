import http from "http";
import fs from "fs";
import querystring from "querystring"

const PORT = 3000;
const FILE = "messages.json";

// // Create file if not exists
// if (!fs.existsSync(FILE)) {
//     fs.writeFileSync(FILE, JSON.stringify([]));
// }

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    // Handle form submission
    else if (req.method === "POST" && req.url === "/submit") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const formData = querystring.parse(body);

            const { name, email, message } = formData;

            // Validation
            if (!name || !email || !message) {
                res.end("All fields are required!");
                return;
            }

            // Read file
            const messages = JSON.parse(fs.readFileSync(FILE));

            // Add new message
            messages.push({ name, email, message });

            // Save file
            fs.writeFileSync(FILE, JSON.stringify(messages, null, 2));

            res.end("Message saved!");
        });
    }

    // Show all messages
    else if (req.method === "GET" && req.url === "/messages") {
        const messages = fs.readFileSync(FILE);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(messages);
    }

    else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});