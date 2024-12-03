const http = require("node:http");
const fs = require("node:fs");

const port = 3000;
const path = "./index.html";
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.appendFile("./log.txt", req.headers, (err) => {
      if (err) throw err;
      console.log(`Done Uploading`);
    });
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(path, (err, data) => {
      if (err) {
        res.end("Error");
      }
      if (data) {
        res.end(data);
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
