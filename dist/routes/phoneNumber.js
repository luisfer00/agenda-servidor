"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressValidator = require("express-validator");

var _phoneNumber = require("../controllers/phoneNumber");

var _middlewares = require("../middlewares");

var router = _express["default"].Router();

router.get("/get-phonenumbers/:id", [(0, _expressValidator.check)("id").not().isEmpty().withMessage("El id del contacto es requerido"), _middlewares.validateRequest], _phoneNumber.getPhoneNumbersController);
router.post("/create-phonenumber", [(0, _expressValidator.check)("id").not().isEmpty().withMessage("El id del contacto es requerido"), (0, _expressValidator.check)("number").matches(/^\+[1-9]\d{1,14}$/).withMessage("El número no es válido"), _middlewares.validateRequest], _phoneNumber.createPhoneNumberController);
router.put("/update-phonenumber/:id", [(0, _expressValidator.check)("id").not().isEmpty().withMessage("El id del numero es requerido"), (0, _expressValidator.check)("number").matches(/^\+[1-9]\d{1,14}$/).withMessage("El número no es válido"), _middlewares.validateRequest], _phoneNumber.updatePhoneNumberController);
router["delete"]("/delete-phonenumber/:id", [(0, _expressValidator.check)("id").not().isEmpty().withMessage("El id del numero es requerido"), _middlewares.validateRequest], _phoneNumber.deletePhoneNumberController);
var _default = router;
exports["default"] = _default;