var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var _ = require("underscore");

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 



//Ejemplo: GET http://localhost:3000/items
app.get('/houses/:city', function (req, res, next) {
    var dataPath = __dirname + path.join('/data.json')

    return new Promise(function (resolve, reject) {
        fs.readFile(dataPath, 'utf8', function (err, readData) {
            if (err) reject(err)
            resolve(JSON.parse(readData))
            datos = JSON.parse(readData)
            var filtered = _.where(datos, {"Ciudad": req.params.city});
            
            res.send( filtered)
        })
    })
});

//Ejemplo: GET http://localhost:3000/items
app.get('/houses', function (req, res, next) {
    var dataPath = __dirname + path.join('/data.json')

    return new Promise(function (resolve, reject) {
        fs.readFile(dataPath, 'utf8', function (err, readData) {
            if (err) reject(err)
            resolve(JSON.parse(readData))
            datos = JSON.parse(readData)
            res.send(datos)
        })
    })
});

//Ejemplo: GET http://localhost:3000/items
app.get('/cities', function (req, res, next) {
    var dataPath = __dirname + path.join('/data.json')

    return new Promise(function (resolve, reject) {
        fs.readFile(dataPath, 'utf8', function (err, readData) {
            if (err) reject(err)
            resolve(JSON.parse(readData))
            datos = JSON.parse(readData)
            datosSinDuplicados = eliminarObjetosDuplicados(datos, 'Ciudad')
            res.send(datosSinDuplicados.map(getCities))
        })
    })
});

//Ejemplo: GET http://localhost:3000/items
app.get('/types', function (req, res, next) {
    var dataPath = __dirname + path.join('/data.json')

    return new Promise(function (resolve, reject) {
        fs.readFile(dataPath, 'utf8', function (err, readData) {
            if (err) reject(err)
            resolve(JSON.parse(readData))
            datos = JSON.parse(readData)
            datosSinDuplicados = eliminarObjetosDuplicados(datos,'Tipo')
            res.send(datosSinDuplicados.map(getTypes))
        })
    })
});

//Ejemplo: GET http://localhost:3000/items
app.get('/prices', function (req, res, next) {
    var dataPath = __dirname + path.join('/data.json')

    return new Promise(function (resolve, reject) {
        fs.readFile(dataPath, 'utf8', function (err, readData) {
            if (err) reject(err)
            resolve(JSON.parse(readData))
            datos = JSON.parse(readData)
            datosSinDuplicados = eliminarObjetosDuplicados(datos, 'Precio')
            res.send(datosSinDuplicados.map(getPrices))
        })
    })
});

function getCities(item, index) {
    var city = item.Ciudad;
    return city;
}

function getTypes(item, index) {
    var type = item.Tipo;
    return type;
}

function getPrices(item, index) {
    var prices = item.Precio;
    return prices;
}

function eliminarObjetosDuplicados(arr, prop) {
    var nuevoArray = [];
    var lookup = {};

    for (var i in arr) {
        lookup[arr[i][prop]] = arr[i];
    }

    for (i in lookup) {
        nuevoArray.push(lookup[i]);
    }

    return nuevoArray;
}

var server = app.listen(3000, function () {
    console.log('Server is running..');
});