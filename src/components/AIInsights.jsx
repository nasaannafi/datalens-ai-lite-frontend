import { BrainCircuit, Sparkles, ShieldAlert, RefreshCw, Bot } from "lucide-react";
export default function AIInsights({regions}) {
  const highest = [...regions].sort((a,b)=>b.puskesmas-a.puskesmas)[0];
  const lowest = [...regions].sort((a,b)=>a.puskesmas-b.puskesmas)[0];
  return <section className="panel insights-panel"><div className="panel-heading"><div><div className="panel-title"><Sparkles size={19}/>AI Insights <span className="beta-pill">Beta</span></div></div><button className="reanalyze-button" onClick={()=>window.alert("Insight demo diperbarui dari data sintetis lokal. Integrasi AI belum tersedia.")}><RefreshCw size={12}/> Analisis ulang</button></div>
    <div className="insight-intro"><span className="insight-spark"><Bot size={22}/></span><div><strong>Ringkasan Analisis</strong><p>{highest && lowest ? `Dalam subset data latihan ini, ${highest.name} memiliki nilai jumlah Puskesmas tertinggi (${highest.puskesmas}), sedangkan ${lowest.name} memiliki nilai terendah (${lowest.puskesmas}). Perbandingan ini bersifat deskriptif dan tidak menunjukkan kecukupan layanan.` : "Belum ada data wilayah yang dapat diringkas."}</p></div></div>
    <div className="insight-disclaimer"><ShieldAlert size={14}/><span>Insight berdasarkan data latihan sintetis, bukan data resmi atau rekomendasi medis.</span></div>
    <div className="insight-actions"><button onClick={()=>window.alert("Analisis ini hanya membandingkan nilai data demo. Belum ada indikator rasio penduduk atau standar layanan.")}>Mana wilayah dengan nilai tertinggi?</button><button onClick={()=>window.alert("Perbandingan 5 wilayah teratas dihitung dari subset data demo.")}>Bandingkan 5 wilayah teratas</button></div>
  </section>;
}
