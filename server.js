const http = require('http');
const url = require('url');
const PORT = process.argv[2] || 5000;

const appEndpoint = '/app/';

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === appEndpoint) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('200 OK\n');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 NOT FOUND\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
