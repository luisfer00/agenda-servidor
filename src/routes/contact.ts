import express from "express";
import { check } from "express-validator";
import {
  createContactController,
  deleteContactController,
  getContactsController,
  updateContactController,
} from "../controllers/contact";
import { validateRequest } from "../middlewares";

const router = express.Router();

router.get("/get-contacts", getContactsController);
router.post(
  "/create-contact",
  check("name").not().isEmpty().withMessage("El nombre es requerido"),
  validateRequest,
  createContactController
);
router.put(
  "/update-contact/:id",
  check("id").not().isEmpty().withMessage("El id es requerido"),
  check("name").not().isEmpty().withMessage("El nombre es requerido"),
  validateRequest,
  updateContactController
);
router.delete(
  "/delete-contact/:id",
  check("id").not().isEmpty().withMessage("El id es requerido"),
  validateRequest,
  deleteContactController
);

export default router;
