var http = require('http');
const port = process.env.PORT || 3000

const devs = require('./devs.json')


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(devs));
});

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});