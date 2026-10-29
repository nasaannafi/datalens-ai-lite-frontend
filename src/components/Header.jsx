import { Search, ChevronDown, Sun, Moon } from "lucide-react";
import { useState } from "react";
export default function Header({ query, onQueryChange, year, onYearChange, mapIndicator, onIndicatorChange }) {
  const [dark, setDark] = useState(true);
  return <header className="top-header">
    <label className="search-box"><Search size={17}/><input value={query} onChange={e=>onQueryChange(e.target.value)} placeholder="Cari kabupaten/kota, kecamatan, atau Puskesmas..." aria-label="Cari wilayah"/></label>
    <div className="header-actions">
      <label className="header-select"><small>Tahun Data</small><span><select value={year} onChange={e=>onYearChange(e.target.value)}><option>2026</option><option>2025</option><option>2024</option></select><ChevronDown size={14}/></span></label>
      <label className="header-select indicator-select"><small>Indikator Peta</small><span><select value={mapIndicator} onChange={e=>onIndicatorChange(e.target.value)}><option>Jumlah Puskesmas</option><option>Tenaga Kesehatan</option><option>Kecamatan</option></select><ChevronDown size={14}/></span></label>
      <button className={`theme-toggle ${dark ? "is-dark" : ""}`} onClick={()=>setDark(!dark)} aria-label="Ganti tema"><span className="theme-knob">{dark ? <Moon size={12}/> : <Sun size={12}/>}</span></button>
    </div>
  </header>;
}
