"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var contactSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
var Contact = (0, _mongoose.model)("Contact", contactSchema);
var _default = Contact;
exports["default"] = _default;