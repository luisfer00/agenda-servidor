import { connect } from "mongoose";
import { DB_NAME, DB_PASSWD, DB_URI, DB_USER } from "../config";

export default async function connectDB() {
  try {
    await connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_URI}/${DB_NAME}?retryWrites=true&w=majority`
    );
    console.log("Conexion con la base de datos realizada");
  } catch (e) {
    throw new Error(`No se pudo conectar a la base de datos ${e}`);
  }
}
