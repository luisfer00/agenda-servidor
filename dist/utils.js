"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleRequestError = void 0;

var _types = require("./types");

var handleRequestError = function handleRequestError(res, e) {
  return res.status(e instanceof _types.RequestError ? e.statusCode : 500).json({
    error: true,
    message: e.message
  });
};

exports.handleRequestError = handleRequestError;