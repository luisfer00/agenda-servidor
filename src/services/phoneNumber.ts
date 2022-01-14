import Contact from "../models/Contact";
import PhoneNumber, { IPhoneNumber } from "../models/PhoneNumber";
import { RequestError } from "../types";

export const getPhoneNumbers = async (contactID: string) => {
  const phoneNumbers = await PhoneNumber.find({ contact: contactID });

  return phoneNumbers;
};
export const createPhoneNumber = async (phoneNumber: IPhoneNumber) => {
  const existingPhoneNumber = await PhoneNumber.findOne({
    number: phoneNumber.number,
    contact: phoneNumber.contact,
  });
  if (existingPhoneNumber) throw new RequestError(400, "El número ya existe");

  const contact = Contact.findById(phoneNumber.contact);
  if (!contact) throw new RequestError(404, "El contacto no existe");

  const newPhoneNumber = new PhoneNumber(phoneNumber);
  await newPhoneNumber.save();
  return newPhoneNumber;
};
export const updatePhoneNumber = async (
  phoneNumber: { number: string; name?: string },
  id: string
) => {
  const existingPhoneNumber = await PhoneNumber.findById(id);
  if (!existingPhoneNumber) throw new RequestError(400, "El número no existe");

  existingPhoneNumber.number = phoneNumber.number;
  if (phoneNumber.name) existingPhoneNumber.name = phoneNumber.name;

  await existingPhoneNumber.save();
  return existingPhoneNumber;
};
export const deletePhoneNumber = async (id: string) => {
  return await PhoneNumber.findByIdAndDelete(id);
};
