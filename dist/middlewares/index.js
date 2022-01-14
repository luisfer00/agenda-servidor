"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRequest = void 0;

var _expressValidator = require("express-validator");

var validateRequest = function validateRequest(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  next();
};

exports.validateRequest = validateRequest;