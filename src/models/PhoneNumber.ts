import { Schema, model, Types } from "mongoose";

export interface IPhoneNumber {
  name?: string;
  number: string;
  contact: Types.ObjectId;
}

const phoneNumberSchema = new Schema<IPhoneNumber>({
  name: String,
  number: { type: String, required: true },
  contact: { type: Schema.Types.ObjectId, ref: "Contact", required: true },
});

const PhoneNumber = model<IPhoneNumber>("PhoneNumber", phoneNumberSchema);

export default PhoneNumber;
