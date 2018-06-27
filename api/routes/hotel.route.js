'use strict'

var express = require('express');
var HotelController = require('../controllers/hotel.controller');

var api = express.Router();

api.get('/get_hoteles', HotelController.getHoteles);
api.get('/get_hotel/:name', HotelController.getHotel);
api.get('/get_hotelStar/:star', HotelController.getHotelByStar);
api.delete('/delete_hotel/:id', HotelController.deleteHotel);

module.exports = api;