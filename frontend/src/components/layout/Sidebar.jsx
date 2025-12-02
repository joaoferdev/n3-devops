import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>

      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Dashboard
      </NavLink>

      <NavLink to="/transactions" className={({ isActive }) => isActive ? "active" : ""}>
        Transações
      </NavLink>

      <NavLink to="/reports" className={({ isActive }) => isActive ? "active" : ""}>
        Relatórios
      </NavLink>
    </aside>
  );
}
