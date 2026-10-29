import { ArrowUpRight } from "lucide-react";
export default function StatCard({title,value,change,icon:Icon,tone}) {
 return <article className="stat-card"><div className="stat-card-top"><span className={`stat-icon ${tone}`}><Icon size={19}/></span><span className="stat-menu">···</span></div><div className="stat-title">{title}</div><div className="stat-value">{value}</div><div className="stat-foot"><span className="stat-change"><ArrowUpRight size={13}/>{change}</span><span className="stat-period">indikator</span></div></article>;
}