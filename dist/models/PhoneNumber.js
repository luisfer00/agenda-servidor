"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var phoneNumberSchema = new _mongoose.Schema({
  name: String,
  number: {
    type: String,
    required: true
  },
  contact: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Contact",
    required: true
  }
});
var PhoneNumber = (0, _mongoose.model)("PhoneNumber", phoneNumberSchema);
var _default = PhoneNumber;
exports["default"] = _default;