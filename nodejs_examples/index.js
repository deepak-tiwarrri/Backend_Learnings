//start a server

const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  res.writeHead(200, "Hello, deepak");
  const _URL = url.parse(req.url, true);
  console.log("Full url", _URL);
  // console.log(_URL.)
  console.log("pahtname: ", _URL.pathname);
  let log = `${Date.now()}: ${req.url} New Request added\n`;

  fs.appendFile("./log.txt", log, () => {
    switch (_URL.pathname) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        res.end(`You have searched: ${JSON.stringify(_URL.query)}`);
        break;

      default:
        res.end("404 found page");
        break;
    }
    console.log("Request logged to file");
  });
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
