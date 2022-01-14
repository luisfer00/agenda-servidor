"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressValidator = require("express-validator");

var _contact = require("../controllers/contact");

var _middlewares = require("../middlewares");

var router = _express["default"].Router();

router.get("/get-contacts", _contact.getContactsController);
router.post("/create-contact", (0, _expressValidator.check)("name").not().isEmpty().withMessage("El nombre es requerido"), _middlewares.validateRequest, _contact.createContactController);
router.put("/update-contact/:id", (0, _expressValidator.check)("id").not().isEmpty().withMessage("El id es requerido"), (0, _expressValidator.check)("name").not().isEmpty().withMessage("El nombre es requerido"), _middlewares.validateRequest, _contact.updateContactController);
router["delete"]("/delete-contact/:id", (0, _expressValidator.check)("id").not().isEmpty().withMessage("El id es requerido"), _middlewares.validateRequest, _contact.deleteContactController);
var _default = router;
exports["default"] = _default;