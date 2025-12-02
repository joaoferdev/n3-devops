import { useTransactions } from "../hooks/useTransactions";


export default function TransactionList() {
  const { transactions, removeTransaction } = useTransactions();

  return (
    <div>
      {transactions.map((t) => (
        <div key={t._id} className="item">
          <span>
            {t.title} — {t.category}
          </span>

          <strong
            style={{
              color: t.type === "entrada" ? "green" : "red"
            }}
          >
            R$ {t.amount}
          </strong>

          <button onClick={() => removeTransaction(t._id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}
