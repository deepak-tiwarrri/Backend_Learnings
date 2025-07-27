//start a server

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, "Hello, deepak");
  let log = `${Date.now()}: ${req.url} New Request added\n`;
  fs.appendFile("./log.txt", log, () => {
    console.log("append file");
  });
  res.end("server is working");
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
