import { Activity, BarChart3, BrainCircuit, Database, LayoutDashboard, Map, Settings, Stethoscope } from "lucide-react";
const items=[["Dashboard",LayoutDashboard],["Eksplorasi Data",Database],["Peta Wilayah",Map],["Analisis & Grafik",BarChart3],["AI Insights",BrainCircuit]];
export default function Sidebar({activeNav,onNavigate}) {
 return <aside className="sidebar">
  <div className="brand"><div className="brand-mark"><Activity size={23}/></div><div><strong>DataLens <span>AI Lite</span></strong><small>SEHAT JATIM</small></div></div>
  <div className="workspace-label">WORKSPACE</div><nav className="nav-list">{items.map(([label,Icon])=><button key={label} className={`nav-item ${activeNav===label?"active":""}`} onClick={()=>onNavigate(label)}><Icon size={18}/><span>{label}</span>{label==="AI Insights"&&<span className="nav-new">AI</span>}</button>)}</nav>
  <div className="sidebar-bottom"><div className="sidebar-help"><div className="help-icon"><Stethoscope size={19}/></div><strong>Data kesehatan, lebih jelas.</strong><p>Eksplorasi data dengan visual yang mudah dipahami.</p></div>
  <button className="nav-item settings-item" onClick={()=>onNavigate("Pengaturan")}><Settings size={18}/><span>Pengaturan</span></button><div className="profile-row"><div className="avatar">SJ</div><div className="profile-text"><strong>Sehat Jatim</strong><small>Demo workspace</small></div></div></div>
 </aside>;
}