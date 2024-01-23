var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  console.debug("we hit this route!")
  response.send(JSON.stringify(request.headers))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
