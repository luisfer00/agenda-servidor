"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateContact = exports.getContacts = exports.deleteContact = exports.createContact = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Contact = _interopRequireDefault(require("../models/Contact"));

var _PhoneNumber = _interopRequireDefault(require("../models/PhoneNumber"));

var _types = require("../types");

var getContacts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var contacts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Contact["default"].find();

          case 2:
            contacts = _context.sent;
            return _context.abrupt("return", contacts);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getContacts() {
    return _ref.apply(this, arguments);
  };
}();

exports.getContacts = getContacts;

var createContact = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(name) {
    var contact, newContact;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Contact["default"].findOne({
              name: name
            });

          case 2:
            contact = _context2.sent;

            if (!contact) {
              _context2.next = 5;
              break;
            }

            throw new _types.RequestError(400, "El contacto ya existe");

          case 5:
            newContact = new _Contact["default"]({
              name: name
            });
            _context2.next = 8;
            return newContact.save();

          case 8:
            return _context2.abrupt("return", newContact);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createContact(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createContact = createContact;

var updateContact = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, name) {
    var contact;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Contact["default"].findById(id);

          case 2:
            contact = _context3.sent;

            if (contact) {
              _context3.next = 5;
              break;
            }

            throw new _types.RequestError(400, "El contacto no existe");

          case 5:
            contact.name = name;
            _context3.next = 8;
            return contact.save();

          case 8:
            return _context3.abrupt("return", contact);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateContact(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateContact = updateContact;

var deleteContact = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var _yield$Promise$all, _yield$Promise$all2, contact;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Promise.all([_Contact["default"].findByIdAndDelete(id), _PhoneNumber["default"].deleteMany({
              contact: id
            })]);

          case 2:
            _yield$Promise$all = _context4.sent;
            _yield$Promise$all2 = (0, _slicedToArray2["default"])(_yield$Promise$all, 1);
            contact = _yield$Promise$all2[0];
            return _context4.abrupt("return", contact);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteContact(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteContact = deleteContact;