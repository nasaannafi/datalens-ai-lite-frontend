import { BrainCircuit,Sparkles,ShieldAlert } from "lucide-react";
export default function AIInsights({regions}) {
 const highest=[...regions].sort((a,b)=>b.puskesmas-a.puskesmas)[0],lowest=[...regions].sort((a,b)=>a.puskesmas-b.puskesmas)[0];
 return <section className="panel insights-panel"><div className="panel-heading"><div><div className="panel-title"><BrainCircuit size={18}/>AI Insights</div><p className="panel-subtitle">Ringkasan berbasis angka yang tersedia</p></div><span className="ai-pill"><Sparkles size={12}/>PREVIEW</span></div>
 <div className="insight-intro"><span className="insight-spark"><Sparkles size={17}/></span><div><strong>Ikhtisar eksplorasi</strong><p>Ringkasan deskriptif data contoh, bukan kesimpulan layanan kesehatan.</p></div></div>
 <div className="insight-item"><span className="insight-number">01</span><div><strong>{highest?.name??"Belum ada data"}</strong><p>{highest?`Nilai fasilitas tertinggi pada subset demo (${highest.puskesmas}).`:"Data wilayah belum tersedia."}</p></div></div>
 <div className="insight-item"><span className="insight-number">02</span><div><strong>{lowest?.name??"Belum ada data"}</strong><p>{lowest?`Nilai fasilitas terendah pada subset demo (${lowest.puskesmas}); bukan indikator kecukupan layanan.`:"Data wilayah belum tersedia."}</p></div></div>
 <div className="insight-disclaimer"><ShieldAlert size={16}/><span>Insight dihitung lokal dari data sintetis. AI generatif belum terhubung.</span></div>
 <button className="generate-button" onClick={()=>window.alert("AI belum terhubung. Hubungkan endpoint FastAPI setelah statistik terverifikasi.")}><Sparkles size={16}/>Generate insight <span>↗</span></button></section>;
}