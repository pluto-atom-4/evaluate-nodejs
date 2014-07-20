var express = require('express');
var app = express();
var curl = require('curlrequest');

app.get('/hello.txt', function(req, res) {
  res.send('Hello World');
});

app.get('/rest',function(req, res) {
  var options = {
    url: 'http://api.laut.fm/doc',
      verbose: true,
      stderr: true
  };
  console.log('%s', options.url);
  curl.request(options, function(err, data) {
    console.log(JSON.stringify(data, null, 4));
    res.send(JSON.stringify(JSON.parse(data), null, 4));
 });
});

var pd = require('pretty-data').pd;

app.get('/xml', function(req, res) {
  var options = {
      url: 'http://www.anls.org/services/EventsService.asmx/GetEventInfo',
      verbose: true,
      stderr: true
  };
  curl.request(options, function(err, data) {
    console.log(data);
    res.send(pd.xml(data));
 });
});

app.use('/static', express.static(__dirname + '/public'));

var server = app.listen(3000,function() {
  console.log('Listening on port %d', server.address().port);
});
