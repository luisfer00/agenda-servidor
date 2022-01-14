import express from "express";
import { check } from "express-validator";
import {
  createPhoneNumberController,
  deletePhoneNumberController,
  getPhoneNumbersController,
  updatePhoneNumberController,
} from "../controllers/phoneNumber";
import { validateRequest } from "../middlewares";

const router = express.Router();

router.get(
  "/get-phonenumbers/:id",
  [
    check("id").not().isEmpty().withMessage("El id del contacto es requerido"),
    validateRequest,
  ],
  getPhoneNumbersController
);
router.post(
  "/create-phonenumber",
  [
    check("id").not().isEmpty().withMessage("El id del contacto es requerido"),
    check("number")
      .matches(/^\+[1-9]\d{1,14}$/)
      .withMessage("El número no es válido"),
    validateRequest,
  ],
  createPhoneNumberController
);
router.put(
  "/update-phonenumber/:id",
  [
    check("id").not().isEmpty().withMessage("El id del numero es requerido"),
    check("number")
      .matches(/^\+[1-9]\d{1,14}$/)
      .withMessage("El número no es válido"),
    validateRequest,
  ],
  updatePhoneNumberController
);
router.delete(
  "/delete-phonenumber/:id",
  [
    check("id").not().isEmpty().withMessage("El id del numero es requerido"),
    validateRequest,
  ],
  deletePhoneNumberController
);

export default router;
