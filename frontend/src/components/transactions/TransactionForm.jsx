import { useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

export default function TransactionForm() {
  const { addTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("entrada");
  const [category, setCategory] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await addTransaction({
      title,
      amount: Number(amount),
      type,
      category,
      date: new Date().toISOString(),
    });

    setTitle("");
    setAmount("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit} className="box">
      <h2>Nova Transação</h2>

      <input placeholder="Descrição" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Valor" value={amount} onChange={e => setAmount(e.target.value)} />
      
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>

      <input placeholder="Categoria" value={category} onChange={e => setCategory(e.target.value)} />

      <button type="submit">Adicionar</button>
    </form>
  );
}
