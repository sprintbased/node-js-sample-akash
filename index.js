var express = require('express')
var dotenv = require('dotenv');
var app = express()

dotenv.config();
app.set('port', (process.env.PORT || 8000))
app.use(express.static(__dirname + '/public'))

app.get('/healthz', function(request, response) {    
  
  response.send("success")
})

app.get('/', function(request, response) {      
  response.send(JSON.stringify(process.env.API_DOMAIN))
})

app.listen(app.get('port'), function() {
  console.log("API_DOMAIN:",process.env.API_DOMAIN)
  console.log("Node app is running at localhost:" + app.get('port'))
})
