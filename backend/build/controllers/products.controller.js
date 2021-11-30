"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductById = exports.getProducts = exports.getProductById = exports.deleteProductById = exports.createProduct = void 0;

var _Products = _interopRequireDefault(require("../models/Products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createProduct = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, ObjGenerales, ObjEspecificos, presupuesto, fechaInicio, fechaTerminacion, crea, fase, producto, productSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, nombre = _req$body.nombre, ObjGenerales = _req$body.ObjGenerales, ObjEspecificos = _req$body.ObjEspecificos, presupuesto = _req$body.presupuesto, fechaInicio = _req$body.fechaInicio, fechaTerminacion = _req$body.fechaTerminacion, crea = _req$body.crea, fase = _req$body.fase;
            producto = new _Products["default"]({
              nombre: nombre,
              ObjGenerales: ObjGenerales,
              ObjEspecificos: ObjEspecificos,
              presupuesto: presupuesto,
              fechaInicio: fechaInicio,
              fechaTerminacion: fechaTerminacion,
              crea: crea,
              fase: fase
            });
            _context.next = 5;
            return producto.save();

          case 5:
            productSaved = _context.sent;
            res.status(201).json(productSaved);
            console.log(productSaved);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function createProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var getProducts = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var productosSaved;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Products["default"].find();

          case 2:
            productosSaved = _context2.sent;
            res.json(productosSaved);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var getProductById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var productEspecifico;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Products["default"].findById(req.params.productId);

          case 2:
            productEspecifico = _context3.sent;
            res.status(200).json(productEspecifico);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProductById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductById = getProductById;

var updateProductById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updatedProduct;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Products["default"].findByIdAndUpdate(req.params.productId, req.json, {
              "new": true
            });

          case 2:
            updatedProduct = _context4.sent;
            res.status(204).json(updatedProduct);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateProductById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateProductById = updateProductById;

var deleteProductById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var deletedProduct;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Products["default"].findByIdAndDelete(req.params.productId);

          case 2:
            deletedProduct = _context5.sent;
            res.status(204).json();

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteProductById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProductById = deleteProductById;