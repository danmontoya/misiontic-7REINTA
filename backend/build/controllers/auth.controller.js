"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.login = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, identificacion, email, password, roles, newUser, foundRoles, role, userSaved, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, identificacion = _req$body.identificacion, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;
            _context.t0 = _User["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.t3 = identificacion;
            _context.next = 7;
            return _User["default"].encryptPassword(password);

          case 7:
            _context.t4 = _context.sent;
            _context.t5 = roles;
            _context.t6 = {
              username: _context.t1,
              email: _context.t2,
              identificacion: _context.t3,
              password: _context.t4,
              roles: _context.t5
            };
            newUser = new _context.t0(_context.t6);

            if (!roles) {
              _context.next = 18;
              break;
            }

            _context.next = 14;
            return _Rol["default"].find({
              nombre: {
                $in: roles
              }
            });

          case 14:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 22;
            break;

          case 18:
            _context.next = 20;
            return _Rol["default"].findOne({
              nombre: "user"
            });

          case 20:
            role = _context.sent;
            newUser.roles = [role._id];

          case 22:
            _context.next = 24;
            return newUser.save();

          case 24:
            userSaved = _context.sent;
            console.log(userSaved);
            token = _jsonwebtoken["default"].sign({
              id: userSaved._id
            }, _config["default"].SECRET, {
              expiresIn: 84600
            });
            res.status(200).json(token);

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userFound, matchPsswrd, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User["default"].findOne({
              email: req.body.email
            }).populate("roles");

          case 3:
            userFound = _context2.sent;

            if (!userFound) {
              res.status(400).json({
                message: "User not found"
              });
            } //console.log(userFound.roles);


            _context2.next = 7;
            return _User["default"].comparePassword(req.body.password, userFound.password);

          case 7:
            matchPsswrd = _context2.sent;

            if (matchPsswrd) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: 'Invalid password'
            }));

          case 10:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            res.json({
              token: token
            });
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;