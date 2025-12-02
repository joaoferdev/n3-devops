import mongoose from "mongoose";

export default function connectDatabase() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log(" MongoDB conectado"))
    .catch((err) => console.error(" Erro ao conectar MongoDB", err));
}

