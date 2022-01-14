import Contact from "../models/Contact";
import PhoneNumber from "../models/PhoneNumber";
import { RequestError } from "../types";

export const getContacts = async () => {
  const contacts = await Contact.find();

  return contacts;
};
export const createContact = async (name: string) => {
  const contact = await Contact.findOne({ name });
  if (contact) throw new RequestError(400, "El contacto ya existe");

  const newContact = new Contact({ name });
  await newContact.save();
  return newContact;
};
export const updateContact = async (id: string, name: string) => {
  const contact = await Contact.findById(id);
  if (!contact) throw new RequestError(400, "El contacto no existe");

  contact.name = name;
  await contact.save();
  return contact;
};
export const deleteContact = async (id: string) => {
  const [contact] = await Promise.all([
    Contact.findByIdAndDelete(id),
    PhoneNumber.deleteMany({ contact: id }),
  ]);
  return contact;
};
