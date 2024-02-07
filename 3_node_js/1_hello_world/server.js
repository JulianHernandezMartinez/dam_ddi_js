const http = require('node:http');  // import for node.js

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// explanation 
// https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
// to run the server run from console "$node server.js"