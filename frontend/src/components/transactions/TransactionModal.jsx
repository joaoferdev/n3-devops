import { useState, useEffect } from "react";
import { api } from "../services/api";
import Modal from "../ui/Modal";

export default function TransactionModal({ open, onClose, data, reload }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("entrada");
  const [category, setCategory] = useState("");

  // Carrega os dados da transação quando abrir o modal
  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setAmount(data.amount);
      setType(data.type);
      setCategory(data.category);
    }
  }, [data]);

  async function handleUpdate(e) {
    e.preventDefault();

    await api.put(`/transactions/${data._id}`, {
      title,
      amount: Number(amount),
      type,
      category,
      date: data.date
    });

    reload();
    onClose();
  }

  if (!open) return null;

  return (
    <Modal open={open}>
      <h2>Editar Transação</h2>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Descrição"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Salvar Alterações</button>

        <button
          type="button"
          onClick={onClose}
          style={{
            background: "#777",
            marginLeft: 10
          }}
        >
          Cancelar
        </button>
      </form>
    </Modal>
  );
}
