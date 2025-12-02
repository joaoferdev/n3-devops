export function validateTransaction(data) {
  if (!data.title || data.title.length < 3)
    throw new Error("Título inválido");

 if (typeof data.amount !== "number" || isNaN(data.amount))
  throw new Error("Valor inválido");

if (data.amount < 0)
  throw new Error("Valor deve ser positivo");


  if (!["entrada", "saida"].includes(data.type))
    throw new Error("Tipo inválido");

  if (!data.category)
    throw new Error("Categoria inválida");

  if (!data.date)
    throw new Error("Data inválida");

  return true;
}
