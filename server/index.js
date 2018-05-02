var bodyParser  = require('body-parser'),
    http        = require('http'),
    express     = require('express')

    houses = require('./properties')

var port        = port = process.env.PORT || 3000,
    app         = express(),
    Server      = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/houses', houses)
app.use(express.static('public'))

Server.listen(port, function () {
    console.log("Server is running on Port: "+ port)
})