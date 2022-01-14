"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePhoneNumberController = exports.getPhoneNumbersController = exports.deletePhoneNumberController = exports.createPhoneNumberController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _phoneNumber = require("../services/phoneNumber");

var _utils = require("../utils");

var getPhoneNumbersController = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, phoneNumbers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            _context.next = 4;
            return (0, _phoneNumber.getPhoneNumbers)(id);

          case 4:
            phoneNumbers = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              error: false,
              phoneNumbers: phoneNumbers
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            (0, _utils.handleRequestError)(res, _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getPhoneNumbersController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPhoneNumbersController = getPhoneNumbersController;

var createPhoneNumberController = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, id, name, number, phoneNumber;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, id = _req$body.id, name = _req$body.name, number = _req$body.number;
            _context2.next = 4;
            return (0, _phoneNumber.createPhoneNumber)({
              contact: id,
              name: name,
              number: number
            });

          case 4:
            phoneNumber = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              error: false,
              phoneNumber: phoneNumber
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            (0, _utils.handleRequestError)(res, _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function createPhoneNumberController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createPhoneNumberController = createPhoneNumberController;

var updatePhoneNumberController = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, name, number, id, phoneNumber;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body2 = req.body, name = _req$body2.name, number = _req$body2.number;
            id = req.params.id;
            _context3.next = 5;
            return (0, _phoneNumber.updatePhoneNumber)({
              number: number,
              name: name
            }, id);

          case 5:
            phoneNumber = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              error: false,
              phoneNumber: phoneNumber
            }));

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            (0, _utils.handleRequestError)(res, _context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function updatePhoneNumberController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updatePhoneNumberController = updatePhoneNumberController;

var deletePhoneNumberController = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, phoneNumber;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return (0, _phoneNumber.deletePhoneNumber)(id);

          case 4:
            phoneNumber = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              error: false,
              phoneNumber: phoneNumber
            }));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            (0, _utils.handleRequestError)(res, _context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function deletePhoneNumberController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deletePhoneNumberController = deletePhoneNumberController;