"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateContactController = exports.getContactsController = exports.deleteContactController = exports.createContactController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _utils = require("../utils");

var _contact = require("../services/contact");

var getContactsController = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var contacts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _contact.getContacts)();

          case 3:
            contacts = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              error: false,
              contacts: contacts
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            (0, _utils.handleRequestError)(res, _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getContactsController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getContactsController = getContactsController;

var createContactController = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var name, contact;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            name = req.body.name;
            _context2.next = 4;
            return (0, _contact.createContact)(name);

          case 4:
            contact = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              error: false,
              contact: contact
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

  return function createContactController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createContactController = createContactController;

var updateContactController = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var name, id, contact;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            name = req.body.name;
            id = req.params.id;
            _context3.next = 5;
            return (0, _contact.updateContact)(id, name);

          case 5:
            contact = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              error: false,
              contact: contact
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

  return function updateContactController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateContactController = updateContactController;

var deleteContactController = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, contact;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return (0, _contact.deleteContact)(id);

          case 4:
            contact = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              error: false,
              contact: contact
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

  return function deleteContactController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteContactController = deleteContactController;