"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var user = new _mongoose.Schema({
  usuario: String,
  email: String,
  roles: [{
    ref: "Role",
    type: _mongoose.Schema.Types.ObjectId
  }]
});
var projectSchema = new _mongoose.Schema({
  nombre: String,
  ObjGenerales: String,
  ObjEspecificos: String,
  presupuesto: Number,
  fechaInicio: String,
  fechaTerminacion: String,
  crea: {
    type: user
  },
  estado: Boolean,
  fase: {
    nombre: String,
    contraseña: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Product', projectSchema);

exports["default"] = _default;