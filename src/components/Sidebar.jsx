
import {
  Activity,
  BarChart3,
  BrainCircuit,
  Database,
  LayoutDashboard,
  Map,
  MapPinned,
  HeartPulse,
} from "lucide-react";

// Daftar menu navigasi
const navigationItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Peta Jawa Timur", icon: Map },
  { label: "Analisis Data", icon: BarChart3 },
  { label: "AI Insights", icon: BrainCircuit },
  { label: "Data Puskesmas", icon: Database },
  { label: "Tentang", icon: Activity },
];

export default function Sidebar({ activeNav, onNavigate }) {
  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="brand">
        <div className="brand-mark">
          <MapPinned size={25} />
        </div>

        <div>
          <strong>DataLens AI</strong>
          <small>East Java Health Data Explorer</small>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav-list" aria-label="Navigasi utama">
        {navigationItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            className={`nav-item ${
              activeNav === label ? "active" : ""
            }`}
            onClick={() => onNavigate(label)}
            aria-current={activeNav === label ? "page" : undefined}
          >
            <Icon size={19} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="sidebar-bottom">
        <div className="sidebar-help">
          <HeartPulse size={25} />

          <strong>Sehat Jatim</strong>

          <p>
            Data untuk wawasan wilayah untuk masa depan yang lebih sehat.
          </p>
        </div>
      </div>
    </aside>
  );
}
