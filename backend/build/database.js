"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Aca establecemos el como  y a que DB se conecte
//normal
var local = "mongodb://localhost/api-mongoAuth";
var mongoAtlas = "mongodb+srv://".concat(_config["default"].USERADMI, ":").concat(_config["default"].PASSWORD, "@josedb.o8ohx.mongodb.net/api");

_mongoose["default"].connect(mongoAtlas, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('DB is connected');
})["catch"](function (err) {
  return console.log('DB is NOT connected');
});