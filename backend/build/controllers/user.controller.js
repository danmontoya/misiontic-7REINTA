"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = exports.createUser = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, email, identificacion, password, roles, rolesFound, user, savedUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, username = _req$body.username, email = _req$body.email, identificacion = _req$body.identificacion, password = _req$body.password, roles = _req$body.roles;
            _context.next = 4;
            return _Rol["default"].find({
              nombre: {
                $in: roles
              }
            });

          case 4:
            rolesFound = _context.sent;
            console.log(rolesFound);
            console.log('++++');
            console.log(req.body); //creating user 

            user = new _User["default"]({
              username: username,
              identificacion: identificacion,
              email: email,
              password: password,
              roles: rolesFound.map(function (role) {
                return role._id;
              })
            }); //Encrypting password

            _context.next = 11;
            return _User["default"].encryptPassword(user.password);

          case 11:
            user.password = _context.sent;
            _context.next = 14;
            return user.save();

          case 14:
            savedUser = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              _id: savedUser._id,
              username: savedUser.username,
              identificacion: savedUser.identificacion,
              email: savedUser.email,
              roles: savedUser.roles
            }));

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            //res.status(403).json('No fue posible crear el usuario')
            console.error(_context.t0);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 18]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].find();

          case 2:
            users = _context2.sent;
            res.json(users);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;