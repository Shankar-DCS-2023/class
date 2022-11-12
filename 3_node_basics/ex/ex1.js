const http = require('http');
const port = 8080;

http.createServer(function (req, res) {
  res.writeHead(200);
  res.write('We built Node server!');
  res.end();
}).listen(port, () => console.log(`listening on ${port}`));
