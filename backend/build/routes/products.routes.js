"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controller");

var _index = require("../middlewares/index");

var router = (0, _express.Router)(); //[authJwt.verifyToken, authJwt.isAdmin],

router.get('/', _products.getProducts);
router.post('/', [_index.authJwt.verifyToken, _index.authJwt.isAdmin], _products.createProduct);
router.get('/:productId', _products.getProductById);
router.put('/:productId', _index.authJwt.verifyToken, _products.updateProductById);
router["delete"]('/:productId', [_index.authJwt.verifyToken, _index.authJwt.isAdmin], _products.deleteProductById);
var _default = router;
exports["default"] = _default;