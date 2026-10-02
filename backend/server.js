const http = require("http");
const fs = require("fs");
const path = require("path");

let bills = [];

const server = http.createServer((req, res) => {

    // Serve index.html
    if (req.method === "GET" && req.url === "/") {

        const filePath = path.join(__dirname, "..", "index.html");

        fs.readFile(filePath, (error, data) => {

            if (error) {
                res.writeHead(500);
                res.end("Error loading page");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });

        return;
    }

    // Serve CSS
    if (req.method === "GET" && req.url === "/style.css") {

        const filePath = path.join(__dirname, "..", "style.css");

        fs.readFile(filePath, (error, data) => {

            if (error) {
                res.writeHead(500);
                res.end("Error loading CSS");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/css"
            });

            res.end(data);
        });

        return;
    }

    // Serve JavaScript
    if (req.method === "GET" && req.url === "/script.js") {

        const filePath = path.join(__dirname, "..", "script.js");

        fs.readFile(filePath, (error, data) => {

            if (error) {
                res.writeHead(500);
                res.end("Error loading JavaScript");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "application/javascript"
            });

            res.end(data);
        });

        return;
    }

    // GET all bills
    if (req.method === "GET" && req.url === "/api/bills") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(bills));

        return;
    }

    // POST a new bill
    if (req.method === "POST" && req.url === "/api/bills") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const bill = JSON.parse(body);

            bill.id = Date.now();

            bills.push(bill);

            res.writeHead(201, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(bill));
        });

        return;
    }

    // Unknown route
    res.writeHead(404, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Route not found"
    }));
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});