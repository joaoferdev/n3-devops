import express from "express";
import cors from "cors";

import transactionRoutes from "./modules/transaction/transaction.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";


console.log("DEBUG ENV MONGO_URI:", process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());



app.use("/api/transactions", transactionRoutes);

app.use(errorHandler);

export default app;
