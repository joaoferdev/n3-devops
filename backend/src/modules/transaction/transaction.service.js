import repo from "./transaction.repository.js";
import { validateTransaction } from "../../schemas/transaction.schema.js";

export async function createTransaction(data) {
  validateTransaction(data);
  return await repo.create(data);
}

export async function listTransactions(query) {
  const filters = {};

  if (query.type) filters.type = query.type;
  if (query.category) filters.category = query.category;

  if (query.month) {
    const [year, month] = query.month.split("-");
    filters.date = {
      $gte: new Date(year, month - 1, 1),
      $lte: new Date(year, month, 0)
    };
  }

  return await repo.find(filters);
}

export async function getTransaction(id) {
  const result = await repo.findById(id);
  if (!result) throw new Error("Transação não encontrada");
  return result;
}

export async function updateTransaction(id, data) {
  validateTransaction(data);
  const updated = await repo.update(id, data);
  if (!updated) throw new Error("Transação não encontrada");
  return updated;
}

export async function deleteTransaction(id) {
  const deleted = await repo.delete(id);
  if (!deleted) throw new Error("Transação não encontrada");
  return true;
}
