export default function StatCard({ title, value, change, icon: Icon, tone }) {
  return <article className="stat-card"><span className={`stat-icon ${tone}`}><Icon size={23}/></span><div className="stat-content"><div className="stat-title">{title}</div><div className="stat-value">{value}</div><div className="stat-change">{change}</div></div></article>;
}
