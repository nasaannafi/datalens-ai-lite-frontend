import { useMemo, useState } from "react";
import { Activity, Building2, Users, MapPinned, AlertTriangle, Search, ChevronDown, X, FileText, HeartPulse } from "lucide-react";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import StatCard from "./components/StatCard.jsx";
import RegionMap from "./components/RegionMap.jsx";
import Charts from "./components/Charts.jsx";
import AIInsights from "./components/AIInsights.jsx";
import { demoRegions, demoSummary } from "./data/demoData.js";
import { getDashboardData } from "./services/dashboardService.js";

export default function App() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [selectedRegion, setSelectedRegion] = useState("Surabaya");
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("2026");
  const [mapIndicator, setMapIndicator] = useState("Jumlah Puskesmas");
  const data = useMemo(() => getDashboardData(demoSummary, demoRegions), []);
  const regions = data.regions;
  const filtered = regions.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()));
  const active = regions.find((r) => r.name === selectedRegion) || regions[0];
  const summary = data.summary;

  return (
    <div className="app-shell">
      <Sidebar activeNav={activeNav} onNavigate={setActiveNav} />
      <main className="main-area">
        <Header query={query} onQueryChange={setQuery} year={year} onYearChange={setYear} mapIndicator={mapIndicator} onIndicatorChange={setMapIndicator} />
        <div className="content-wrap">
          <section className="welcome-row">
            <div className="hero-copy">
              <span className="eyebrow">SELAMAT DATANG DI</span>
              <h1>DataLens AI</h1>
              <h2>East Java Health Data Explorer</h2>
              <p>Jelajahi dan analisis data Puskesmas di Jawa Timur melalui peta interaktif, statistik, dan wawasan berbasis data.</p>
            </div>
            <div className="hero-highlights">
              <div><MapPinned /><span><strong>{regions.length}</strong> wilayah demo</span></div>
              <div><Building2 /><span><strong>{summary.puskesmas.toLocaleString("id-ID")}</strong> fasilitas pada data demo</span></div>
              <div><Activity /><span>Analisis statistik</span></div>
              <div><HeartPulse /><span>Visualisasi interaktif</span></div>
            </div>
          </section>

          <section className="about-banner">
            <div className="about-icon"><FileText size={25} /></div>
            <div className="about-copy"><strong>Tentang Data</strong><p>Dataset yang tampil merupakan data latihan sintetis untuk pengembangan aplikasi, bukan data resmi Puskesmas Jawa Timur.</p></div>
            <span className="demo-badge">DATA LATIHAN</span>
          </section>

          <section className="stats-grid">
            <StatCard title="Total Puskesmas (demo)" value={summary.puskesmas.toLocaleString("id-ID")} change="Data sintetis" icon={Building2} tone="blue" />
            <StatCard title="Kabupaten/Kota contoh" value={regions.length.toLocaleString("id-ID")} change="Subset wilayah" icon={MapPinned} tone="blue" />
            <StatCard title="Total tenaga kesehatan*" value={summary.tenagaKesehatan.toLocaleString("id-ID")} change="Data sintetis" icon={Users} tone="teal" />
            <StatCard title="Wilayah terwakili" value={summary.kecamatan.toLocaleString("id-ID")} change="Nilai demo" icon={Activity} tone="cyan" />
            <StatCard title="Catatan data" value="Demo" change="Bukan statistik resmi" icon={AlertTriangle} tone="red" />
          </section>

          <section className="explorer-grid">
            <RegionMap regions={regions} selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion} indicator={mapIndicator} />
            <aside className="panel region-list-panel">
              <div className="panel-heading compact-heading"><div className="panel-title">Daftar Kabupaten/Kota</div></div>
              <label className="region-search"><Search size={15} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari wilayah..." /></label>
              <div className="sort-label">Urutkan: Jumlah Puskesmas <ChevronDown size={14} /></div>
              <div className="region-list">
                {[...filtered].sort((a,b)=>b.puskesmas-a.puskesmas).map((r, i) => (
                  <button key={r.name} className={`region-list-item ${selectedRegion === r.name ? "selected" : ""}`} onClick={() => setSelectedRegion(r.name)}>
                    <i className={`region-dot dot-${i % 5}`} /><span>{r.name}</span><strong>{r.puskesmas}</strong>
                  </button>
                ))}
                {filtered.length === 0 && <p className="empty-list">Wilayah tidak ditemukan.</p>}
              </div>
            </aside>
            <aside className="panel region-detail-panel">
              <div className="panel-heading compact-heading"><div className="panel-title">Detail Wilayah</div><button className="panel-action" onClick={() => setSelectedRegion("")} aria-label="Tutup detail"><X size={15}/></button></div>
              {active ? <>
                <div className="detail-title"><span className="detail-icon"><Building2 size={23}/></span><div><strong>{active.name}</strong><small>Wilayah pada data latihan</small></div></div>
                <div className="detail-metrics">
                  <div><span>Jumlah Puskesmas</span><strong>{active.puskesmas}</strong></div>
                  <div><span>Tenaga Kesehatan*</span><strong>{active.tenagaKesehatan.toLocaleString("id-ID")}</strong></div>
                  <div><span>Kecamatan (nilai demo)</span><strong>{active.kecamatan}</strong></div>
                </div>
                <p className="detail-note">*Angka ilustratif, bukan statistik resmi.</p>
                <button className="detail-button" onClick={() => setActiveNav("Eksplorasi Data")}>Lihat data wilayah</button>
              </> : <p className="empty-list">Pilih wilayah dari daftar untuk melihat detail.</p>}
            </aside>
          </section>

          <section className="bottom-grid">
            <Charts regions={regions} />
            <AIInsights regions={regions} />
          </section>
          <footer className="page-footer"><span>DataLens AI Lite · Sehat Jatim</span><span>Data sintetis untuk pengembangan UI · Tahun {year}</span></footer>
        </div>
      </main>
    </div>
  );
}
