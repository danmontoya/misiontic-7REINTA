"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ROLES = void 0;

var _mongoose = require("mongoose");

var ROLES = ["Estudiante", "Administrador", "Lider", "Pendiente"];
exports.ROLES = ROLES;
var roles = new _mongoose.Schema({
  nombre: String
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Role', roles);

exports["default"] = _default;