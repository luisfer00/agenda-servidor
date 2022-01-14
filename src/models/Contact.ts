import { model, Schema } from "mongoose";

export interface IContact {
  name: string;
}

const contactSchema = new Schema<IContact>({
  name: { type: String, required: true },
});

const Contact = model<IContact>("Contact", contactSchema);

export default Contact;
