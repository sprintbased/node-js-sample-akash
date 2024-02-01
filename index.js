var express = require('express')
var dotenv = require('dotenv');
var app = express()

dotenv.config();
app.set('port', 3001)
app.use(express.static(__dirname + '/public'))

app.get('/healthz', function(request, response) {    
  console.debug("Health check passed!")
  response.send("Health check passed!")
})

app.get('/bar', function(request, response) {      
  console.debug("Hello World!")
  response.send("Hello World!")
})

app.listen(app.get('port'), function() {  
  console.log("Node app is running at localhost:" + app.get('port'))
})
