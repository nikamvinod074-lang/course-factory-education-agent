import { NavLink, Outlet } from "react-router-dom";
import { navigation } from "../data/navigation";

export default function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <img className="brand-logo" src="/parivestra-logo.jpeg" alt="Parivestra logo" />
        <p className="nav-caption">PERSONAL LEARNING SPACE</p>
        <nav>
          {navigation.map(({ label, path, icon: Icon }) => (
            <NavLink key={path} to={path} end={path === "/"} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              <Icon size={18} /><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-note">
          <strong>Learn at your pace.</strong>
          <p>Your personal AI tutor is ready whenever you are.</p>
        </div>
      </aside>
      <main className="main">
        <header className="topbar">
          <span>Parivestra <b>/</b> Learning space</span>
          <div className="user-chip"><span className="avatar">A</span> Alex Morgan</div>
        </header>
        <section className="content"><Outlet /></section>
      </main>
    </div>
  );
}