"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FASES = void 0;

var _mongoose = require("mongoose");

var FASES = ["Inicio", "Desarrollo", "Terminado"];
exports.FASES = FASES;
var fases = new _mongoose.Schema({
  nombre: String
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Fases', fases);

exports["default"] = _default;