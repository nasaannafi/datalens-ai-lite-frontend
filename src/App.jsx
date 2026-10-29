import { useMemo,useState } from "react";
import { Activity,Building2,MapPinned,Users } from "lucide-react";
import Sidebar from "./components/Sidebar.jsx";import Header from "./components/Header.jsx";import StatCard from "./components/StatCard.jsx";import RegionMap from "./components/RegionMap.jsx";import Charts from "./components/Charts.jsx";import AIInsights from "./components/AIInsights.jsx";
import {demoRegions,demoSummary} from "./data/demoData.js";import {getDashboardData} from "./services/dashboardService.js";
export default function App() {
 const [activeNav,setActiveNav]=useState("Dashboard"),[selectedRegion,setSelectedRegion]=useState("Semua Wilayah"),[query,setQuery]=useState("");
 const data=useMemo(()=>getDashboardData(demoSummary,demoRegions),[]),regions=data.regions;
 const filtered=regions.filter(r=>r.name.toLowerCase().includes(query.toLowerCase()));
 const active=regions.find(r=>r.name===selectedRegion);
 const visible=selectedRegion==="Semua Wilayah"?regions:(active?[active]:[]);
 const summary=selectedRegion==="Semua Wilayah"?data.summary:{puskesmas:active?.puskesmas??0,tenagaKesehatan:active?.tenagaKesehatan??0,kecamatan:active?.kecamatan??0};
 return <div className="app-shell"><Sidebar activeNav={activeNav} onNavigate={setActiveNav}/><main className="main-area"><Header query={query} onQueryChange={setQuery}/><div className="content-wrap">
 <section className="welcome-row"><div><div className="eyebrow"><span className="status-dot"/>DATA EXPLORATION WORKSPACE</div><h1>{activeNav==="Dashboard"?"Dashboard Kesehatan":activeNav}</h1><p>Ringkasan data layanan kesehatan untuk eksplorasi wilayah Jawa Timur.</p></div>
 <label className="region-select"><MapPinned size={16}/><span>Wilayah</span><select value={selectedRegion} onChange={e=>setSelectedRegion(e.target.value)}><option>Semua Wilayah</option>{filtered.map(r=><option key={r.name}>{r.name}</option>)}</select></label></section>
 <div className="demo-banner"><span className="demo-badge">DATA DEMO</span><span>Angka berikut adalah data contoh sintetis, bukan statistik resmi Jawa Timur.</span></div>
 <section className="stats-grid"><StatCard title="Fasilitas (contoh)" value={summary.puskesmas.toLocaleString("id-ID")} change="Data demo" icon={Building2} tone="blue"/><StatCard title="Tenaga kesehatan" value={summary.tenagaKesehatan.toLocaleString("id-ID")} change="Data demo" icon={Users} tone="green"/><StatCard title="Kecamatan terwakili" value={summary.kecamatan.toLocaleString("id-ID")} change="Data demo" icon={MapPinned} tone="purple"/><StatCard title="Status dataset" value="Latihan" change="Belum terhubung API" icon={Activity} tone="orange"/></section>
 <section className="primary-grid"><RegionMap regions={visible} selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion}/><AIInsights regions={visible}/></section><Charts regions={regions}/><footer className="page-footer"><span>DataLens AI Lite · Sehat Jatim</span><span>Frontend MVP · Data sintetis untuk pengembangan UI</span></footer>
 </div></main></div>;
}