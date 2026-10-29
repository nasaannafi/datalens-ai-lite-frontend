import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart3, ChevronDown } from "lucide-react";
export default function Charts({regions}) {
  const data = [...regions].sort((a,b)=>b.puskesmas-a.puskesmas);
  return <section className="panel chart-panel"><div className="panel-heading"><div><div className="panel-title"><BarChart3 size={18}/>Perbandingan Jumlah Puskesmas</div><p className="panel-subtitle">Perbandingan pada subset data latihan sintetis</p></div><span className="chart-filter">Semua Wilayah <ChevronDown size={13}/></span></div>
    <div className="chart-wrap"><ResponsiveContainer width="100%" height="100%"><BarChart data={data} margin={{top:12,right:12,left:-18,bottom:2}}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27466b"/><XAxis dataKey="name" tick={{fill:"#c1d3e8",fontSize:10}} axisLine={false} tickLine={false} interval={0}/><YAxis tick={{fill:"#a9bfd8",fontSize:10}} axisLine={false} tickLine={false} allowDecimals={false}/><Tooltip cursor={{fill:"#19385d"}} contentStyle={{background:"#0c2341",border:"1px solid #315781",borderRadius:8,color:"#edf6ff",fontSize:12}}/><Bar dataKey="puskesmas" name="Fasilitas (demo)" fill="#2598ff" radius={[4,4,0,0]} maxBarSize={38}/></BarChart></ResponsiveContainer></div>
    <div className="chart-foot"><span><i className="chart-foot-dot"/>Jumlah fasilitas per wilayah (demo)</span><span>Data sintetis</span></div></section>;
}
