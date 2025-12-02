import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransactionsProvider } from "./context/TransactionsContext";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

import "./styles/global.css";

export default function App() {
  return (
    <TransactionsProvider>
      <BrowserRouter>
        <div style={{ display: "flex", height: "100vh" }}>
          
          
          <Sidebar />

          
          <div style={{ flex: 1, overflow: "auto" }}>
            <Header />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </TransactionsProvider>
  );
}
