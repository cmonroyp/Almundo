'use strict'
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
var clone = [];
clone = obj.slice(0);


function getHotel(req, res) {

    let hotel_name = req.params.name;
    let arrayHotel = [];

    clone.find((element) => {
        if (element.name.indexOf(hotel_name) >= 0) {
            arrayHotel.push(element);
        }
    });

    if (arrayHotel.length > 0) {
        return res.status(200).send({
            hoteles: arrayHotel,
            total: arrayHotel.length
        })
    } else {
        return res.status(404).send({
            message: 'Busqueda sin Exito!.'
        })
    }
}

function getHotelByStar(req, res) {

    let hotel_star = req.params.star;
    //console.log(hotel_star)
    let arrayHotel = [];

    for (let h of clone) {
        //si es 0 muestra todos los hoteles
        if (hotel_star == 0) {
            arrayHotel.push(h)
        } else if (h.stars == hotel_star) {
            arrayHotel.push(h)
        }
    }

    if (arrayHotel.length > 0) {
        return res.status(200).send({
            hoteles: arrayHotel,
            total: arrayHotel.length
        })
    } else {
        return res.status(404).send({
            message: 'Busqueda sin Exito!.'
        })
    }

}

function getHoteles(req, res) {

    res.status(200).send({
        hoteles: clone,
        total: clone.length
    })

}

function deleteHotel(req, res) {

    var hotel_id = req.params.id;

    var index = obj.map((el) => el.id).indexOf(hotel_id)
    if (index > -1) {
        //obj.splice(index, 1)
        obj = [
            ...obj.splice(0, index),
            ...obj.splice(index + 1)
        ]
    }

    return res.status(200).send({
        hotoles: obj,
        total: obj.length
    })

}


module.exports = {
    getHoteles,
    getHotel,
    getHotelByStar,
    deleteHotel
}