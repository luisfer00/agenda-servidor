import { Request, Response } from "express";
import {
  createPhoneNumber,
  deletePhoneNumber,
  getPhoneNumbers,
  updatePhoneNumber,
} from "../services/phoneNumber";
import { handleRequestError } from "../utils";

export const getPhoneNumbersController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const phoneNumbers = await getPhoneNumbers(id);
    return res.status(200).json({ error: false, phoneNumbers });
  } catch (e: any) {
    handleRequestError(res, e);
  }
};
export const createPhoneNumberController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id, name, number } = req.body;
    const phoneNumber = await createPhoneNumber({ contact: id, name, number });
    return res.status(200).json({ error: false, phoneNumber });
  } catch (e: any) {
    handleRequestError(res, e);
  }
};
export const updatePhoneNumberController = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, number } = req.body;
    const { id } = req.params;
    const phoneNumber = await updatePhoneNumber({ number, name }, id);
    return res.status(200).json({ error: false, phoneNumber });
  } catch (e: any) {
    handleRequestError(res, e);
  }
};
export const deletePhoneNumberController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const phoneNumber = await deletePhoneNumber(id);
    return res.status(200).json({ error: false, phoneNumber });
  } catch (e: any) {
    handleRequestError(res, e);
  }
};
