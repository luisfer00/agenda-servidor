"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _config = require("../config");

var _db = _interopRequireDefault(require("./db"));

var _routes = _interopRequireDefault(require("../routes"));

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])({
  origin: "*"
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/api", _routes["default"]);
app.use(function (req, res) {
  res.status(404).json({
    error: true,
    message: "Ruta desconocida"
  });
});

var start = function start() {
  app.listen(_config.PORT, /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _db["default"])();

          case 2:
            console.log("Servidor corriendo en el puerto ".concat(_config.PORT));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
};

var _default = start;
exports["default"] = _default;