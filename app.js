// requires
var express = require('express');
var mongoose = require('mongoose'); //libreria para trabajar con mongo ODM

// Inicializar variables
var app = express();

// Conection a la base de datos mongoDb
var puerto = 27017;
mongoose.connection.openUri(`mongodb://localhost:${puerto}/hospitalDB`, (err, res) => {
    if (err) throw err;
    console.log('La conexión a la base de datos esta corriendo en el puerto ' + puerto + ' : \x1b[32m%s\x1b[0m', 'online');

})




//Rutas



// poner a escuchar el expres en un puerto definido

app.listen(3000, () => {
    console.log('express server corriendo en el puerto 3000: \x1b[32m%s\x1b[0m', 'online');

});