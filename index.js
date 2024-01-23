var express = require('express')
var dotenv = require('dotenv');
var app = express()

dotenv.config();
app.set('port', (process.env.PORT || 8000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {  
  response.send(`TEST: ${process.env.TEST_ROUTE}`)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
