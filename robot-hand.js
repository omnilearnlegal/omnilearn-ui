const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('🟢 AI control server is live\n');
}).listen(3001, () => {
  console.log('🟢 AI control server is running at http://localhost:3001');
});

