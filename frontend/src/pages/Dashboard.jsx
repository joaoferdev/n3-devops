import { useTransactions } from "../hooks/useTransactions";
import TransactionForm from "../components/transactions/TransactionForm";
import TransactionList from "../components/transactions/TransactionList";

export default function Dashboard() {
  const { transactions, reload, loading } = useTransactions();

  return (
    <div className="container">
      <h1>Controle Financeiro</h1>

      <div className="box">
        <h2>Nova Transação</h2>
        <TransactionForm reload={reload} />
      </div>

      <div className="box">
        <h2>Transações Atualizado</h2>

        {loading && <p>Carregando...</p>}

        {!loading && transactions.length === 0 && (
          <p>Nenhuma transação cadastrada.</p>
        )}

        <TransactionList />
      </div>
    </div>
  );
}
