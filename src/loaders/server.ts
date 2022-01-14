import express, { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import { PORT } from "../config";
import connectDB from "./db";
import routes from "../routes";

const app = express();

app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
app.use((req, res) => {
  res.status(404).json({ error: true, message: "Ruta desconocida" });
});

const start = () => {
  app.listen(PORT, async () => {
    await connectDB();
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
};

export default start;
