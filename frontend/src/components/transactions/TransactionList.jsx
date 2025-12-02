import { useTransactions } from "../../hooks/useTransactions";


export default function TransactionList() {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <div>
      {transactions.map((t) => (
        <div key={t._id} className="item">
          <span>{t.title} — {t.category}</span>

          <strong style={{ color: t.type === "entrada" ? "green" : "red" }}>
            R$ {t.amount}
          </strong>

          <button onClick={() => deleteTransaction(t._id)}>
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}
