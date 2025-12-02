import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await api.get("/transactions");
    setTransactions(res.data || []);
    setLoading(false);
  }

  async function addTransaction(data) {
    const res = await api.post("/transactions", data);
    setTransactions(prev => [...prev, res.data]); // << INSTANTÂNEO
  }

  async function removeTransaction(id) {
    await api.delete(`/transactions/${id}`);
    setTransactions(prev => prev.filter(t => t._id !== id));
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, loading, addTransaction, removeTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactionsContext = () => useContext(TransactionsContext);
