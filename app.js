var express = require('express')
  , cors = require('cors')
  , app = express();

app.options('/products/:id', cors()); // enable pre-flight request for DELETE request 
app.del('/products/:id', cors(), function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(devs));
});

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80');
});