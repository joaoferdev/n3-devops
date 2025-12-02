import dotenv from "dotenv";
dotenv.config();

console.log("DEBUG LOAD ENV:", process.env.MONGO_URI);

import connectDatabase from "./src/config/database.js";
import app from "./src/app.js";

connectDatabase();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` Servidor rodando em http://localhost:${PORT}`);
});
