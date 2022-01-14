"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePhoneNumber = exports.getPhoneNumbers = exports.deletePhoneNumber = exports.createPhoneNumber = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Contact = _interopRequireDefault(require("../models/Contact"));

var _PhoneNumber = _interopRequireDefault(require("../models/PhoneNumber"));

var _types = require("../types");

var getPhoneNumbers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(contactID) {
    var phoneNumbers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _PhoneNumber["default"].find({
              contact: contactID
            });

          case 2:
            phoneNumbers = _context.sent;
            return _context.abrupt("return", phoneNumbers);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPhoneNumbers(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPhoneNumbers = getPhoneNumbers;

var createPhoneNumber = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(phoneNumber) {
    var existingPhoneNumber, contact, newPhoneNumber;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _PhoneNumber["default"].findOne({
              number: phoneNumber.number,
              contact: phoneNumber.contact
            });

          case 2:
            existingPhoneNumber = _context2.sent;

            if (!existingPhoneNumber) {
              _context2.next = 5;
              break;
            }

            throw new _types.RequestError(400, "El número ya existe");

          case 5:
            contact = _Contact["default"].findById(phoneNumber.contact);

            if (contact) {
              _context2.next = 8;
              break;
            }

            throw new _types.RequestError(404, "El contacto no existe");

          case 8:
            newPhoneNumber = new _PhoneNumber["default"](phoneNumber);
            _context2.next = 11;
            return newPhoneNumber.save();

          case 11:
            return _context2.abrupt("return", newPhoneNumber);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createPhoneNumber(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createPhoneNumber = createPhoneNumber;

var updatePhoneNumber = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(phoneNumber, id) {
    var existingPhoneNumber;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _PhoneNumber["default"].findById(id);

          case 2:
            existingPhoneNumber = _context3.sent;

            if (existingPhoneNumber) {
              _context3.next = 5;
              break;
            }

            throw new _types.RequestError(400, "El número no existe");

          case 5:
            existingPhoneNumber.number = phoneNumber.number;
            if (phoneNumber.name) existingPhoneNumber.name = phoneNumber.name;
            _context3.next = 9;
            return existingPhoneNumber.save();

          case 9:
            return _context3.abrupt("return", existingPhoneNumber);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updatePhoneNumber(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updatePhoneNumber = updatePhoneNumber;

var deletePhoneNumber = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _PhoneNumber["default"].findByIdAndDelete(id);

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deletePhoneNumber(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deletePhoneNumber = deletePhoneNumber;