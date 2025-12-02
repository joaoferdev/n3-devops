import { useTransactions } from "../hooks/useTransactions";

export default function Reports() {
  const { transactions, loading } = useTransactions();

  if (loading) {
    return (
      <div className="container">
        <div className="box">
          <p>Carregando relatórios...</p>
        </div>
      </div>
    );
  }

  // Segurança total caso a API retorne algo inesperado
  const list = Array.isArray(transactions) ? transactions : [];

  // Cálculos
  const totalEntradas = list
    .filter((t) => t.type === "entrada")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalSaidas = list
    .filter((t) => t.type === "saida")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const saldo = totalEntradas - totalSaidas;

  return (
    <div className="container">
      <h1> Relatórios Financeiros</h1>

      <div className="box">
        <p>Resumo geral baseado nas suas transações cadastradas.</p>
      </div>

      {/* ===== CARDS DO RELATÓRIO ===== */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Card Entradas */}
        <div
          className="box"
          style={{
            flex: "1",
            background: "#e8fbef",
            borderLeft: "5px solid #26a75f",
          }}
        >
          <h2 style={{ color: "#1f8a4b" }}>Entradas</h2>
          <h1 style={{ marginTop: "10px" }}>R$ {totalEntradas.toFixed(2)}</h1>
        </div>

        {/* Card Saídas */}
        <div
          className="box"
          style={{
            flex: "1",
            background: "#fde9e9",
            borderLeft: "5px solid #d94141",
          }}
        >
          <h2 style={{ color: "#b83636" }}>Saídas</h2>
          <h1 style={{ marginTop: "10px" }}>R$ {totalSaidas.toFixed(2)}</h1>
        </div>

        {/* Card Saldo Final */}
        <div
          className="box"
          style={{
            flex: "1",
            background: "#e8f1ff",
            borderLeft: "5px solid #4c8bf5",
          }}
        >
          <h2 style={{ color: "#3a73d8" }}>Saldo Final</h2>
          <h1 style={{ marginTop: "10px" }}>R$ {saldo.toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
}
