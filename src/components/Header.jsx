import { Bell, Search, CircleHelp } from "lucide-react";
export default function Header({query,onQueryChange}) {
 return <header className="top-header"><div className="breadcrumb"><span>Workspace</span><span>/</span><strong>Overview</strong></div><div className="header-actions">
 <label className="search-box"><Search size={16}/><input value={query} onChange={e=>onQueryChange(e.target.value)} placeholder="Cari wilayah..." aria-label="Cari wilayah"/><kbd>⌘ K</kbd></label>
 <button className="icon-button" aria-label="Bantuan"><CircleHelp size={19}/></button><button className="icon-button notification-button" aria-label="Notifikasi"><Bell size={19}/><i/></button><div className="header-avatar">SJ</div>
 </div></header>;
}