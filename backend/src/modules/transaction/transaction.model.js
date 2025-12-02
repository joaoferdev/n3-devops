import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 3 },
    amount: { type: Number, required: true, min: 0 },
    type: { type: String, enum: ["entrada", "saida"], required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", schema);
