import express from "express";
import contactRouter from "./contact";
import phoneNumberRouter from "./phoneNumber";

const router = express.Router();

router.use("/contact", contactRouter);
router.use("/phonenumber", phoneNumberRouter);

export default router;
