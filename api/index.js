'use strict'

var app = require('./app');
var port = process.env.PORT || 3977;

function connection(err, res) {

    if (err) {
        throw err;
    } else {
        console.log('Conexion lista para Usar!.');
        app.listen(port, function() {
            console.log('Servidor Api Rest Ejecutandose!. http://localhost:' + port);
        })
    }
}

connection();