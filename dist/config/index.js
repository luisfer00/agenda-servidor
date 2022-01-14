"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.DB_USER = exports.DB_URI = exports.DB_PASSWD = exports.DB_NAME = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var PE = process.env;
var PORT = parseInt(PE.PORT) || 8080;
exports.PORT = PORT;
var DB_URI = "".concat(PE.DB_URI);
exports.DB_URI = DB_URI;
var DB_USER = "".concat(PE.DB_USER);
exports.DB_USER = DB_USER;
var DB_PASSWD = "".concat(PE.DB_PASSWD);
exports.DB_PASSWD = DB_PASSWD;
var DB_NAME = "".concat(PE.DB_NAME);
exports.DB_NAME = DB_NAME;