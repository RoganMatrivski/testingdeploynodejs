const express = require('express')
const app = express()
const port = 3000

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Express app listening at http://%s:%s', host, port);
});


app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.get('/', function (req, res) {
  res.send('Got a GET request')
})