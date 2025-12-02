import { api } from "../../services/api";

export default function TransactionItem({ data, reload }) {
  async function handleDelete() {
    await api.delete(`/transactions/${data._id}`);
    reload();
  }

  return (
    <div className="item">
      <span>
        {data.title} — {data.category}
      </span>

      <span className={data.type === "entrada" ? "amount-in" : "amount-out"}>
        R$ {data.amount}
      </span>

      <button onClick={handleDelete} style={{ marginLeft: 10, background: "#d94a4a" }}>
        Excluir
      </button>
    </div>
  );
}
