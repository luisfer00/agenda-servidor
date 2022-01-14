import { config } from "dotenv";

config();

const PE = process.env;

export const PORT = parseInt(PE.PORT!) || 8080;

export const DB_URI = `${PE.DB_URI}`;
export const DB_USER = `${PE.DB_USER}`;
export const DB_PASSWD = `${PE.DB_PASSWD}`;
export const DB_NAME = `${PE.DB_NAME}`;
