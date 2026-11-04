
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navigation } from "../data/navigation";
import { useAuth } from "../features/auth/AuthContext";

export default function AppLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  const displayName = user?.name || "Student";

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <img
          className="brand-logo"
          src="/parivestra-logo.jpeg"
          alt="Parivestra logo"
        />

        <p className="nav-caption">PERSONAL LEARNING SPACE</p>

        <nav>
          {navigation.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={18} />
              <span>{label}</span>
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

          <div className="user-chip">
            <span className="avatar">
              {displayName.charAt(0).toUpperCase()}
            </span>
            {displayName}

            <button
              type="button"
              className="logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </header>

        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
