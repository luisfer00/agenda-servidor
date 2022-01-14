"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _contact = _interopRequireDefault(require("./contact"));

var _phoneNumber = _interopRequireDefault(require("./phoneNumber"));

var router = _express["default"].Router();

router.use("/contact", _contact["default"]);
router.use("/phonenumber", _phoneNumber["default"]);
var _default = router;
exports["default"] = _default;