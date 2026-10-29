import { Activity, BarChart3, BrainCircuit, Database, LayoutDashboard, Map, HeartPulse } from "lucide-react";
const items = [["Dashboard", LayoutDashboard], ["Peta Jawa Timur", Map], ["Analisis Data", BarChart3], ["AI Insights", BrainCircuit], ["Data Puskesmas", Database], ["Tentang", Activity]];
export default function Sidebar({ activeNav, onNavigate }) {
  return <aside className="sidebar">
    <div className="brand"><div className="brand-mark"><MapPinnedIcon /></div><div><strong>DataLens AI</strong><small>East Java Health Data Explorer</small></div></div>
    <nav className="nav-list">{items.map(([label, Icon]) => <button key={label} className={`nav-item ${activeNav === label ? "active" : ""}`} onClick={() => onNavigate(label)}><Icon size={19}/><span>{label}</span></button>)}</nav>
    <div className="sidebar-bottom"><div className="sidebar-help"><HeartPulse size={25}/><strong>Sehat Jatim</strong><p>Data untuk wawasan wilayah untuk masa depan yang lebih sehat.</p></div></div>
  </aside>;
}
function MapPinnedIcon(){ return <MapPinnedFallback /> }
function MapPinnedFallback(){ return <Activity size={25}/> }
