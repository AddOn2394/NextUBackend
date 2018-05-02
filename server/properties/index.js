var express = require('express')
var Router = express.Router()


Router.get('/houses'),function(req, res) {
    // get all Houses
}

Router.get('/cities'), function (req, res) {
    // get all Cities
}

Router.get('/types'), function (req, res) {
    // get all Types
}

Router.get('/prices'), function (req, res) {
    // get all Prices
}

Router.get('/filteredHouses'), function (req, res) {
    // get all Houses with filters
}