import { Request, Response } from "express";
import { handleRequestError } from "../utils";
import {
  createContact,
  deleteContact,
  getContacts,
  updateContact,
} from "../services/contact";

export const getContactsController = async (req: Request, res: Response) => {
  try {
    const contacts = await getContacts();
    return res.status(200).json({ error: false, contacts });
  } catch (e: any) {
    handleRequestError(res, e);
  }
};
export const createContactController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const contact = await createContact(name);
    return res.status(200).json({ error: false, contact });
  } catch (e: any) {
    handleRequestError(res, e);
  }
};
export const updateContactController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const contact = await updateContact(id, name);
    return res.status(200).json({ error: false, contact });
  } catch (e: any) {
    handleRequestError(res, e);
  }
};
export const deleteContactController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contact = await deleteContact(id);
    return res.status(200).json({ error: false, contact });
  } catch (e: any) {
    handleRequestError(res, e);
  }
};
