import { useEffect } from "react";
import { MapContainer,TileLayer,CircleMarker,Tooltip,useMap } from "react-leaflet";
import { MapPin,Maximize2 } from "lucide-react";
// Titik kota hanya ilustrasi interaksi peta, bukan lokasi fasilitas atau batas administrasi resmi.
const points=[
 {name:"Surabaya",position:[-7.2575,112.7521]},{name:"Malang",position:[-7.9666,112.6326]},
 {name:"Sidoarjo",position:[-7.4478,112.7183]},{name:"Ponorogo",position:[-7.8682,111.4621]},
 {name:"Banyuwangi",position:[-8.2191,114.3691]},{name:"Jember",position:[-8.1724,113.7004]},
 {name:"Kediri",position:[-7.848,112.0178]},{name:"Madiun",position:[-7.6298,111.5239]}
];
function FitBounds({items}) { const map=useMap(); useEffect(()=>{if(items.length)map.fitBounds(items.map(p=>p.position),{padding:[25,25]});},[map,items]); return null; }
export default function RegionMap({regions,selectedRegion,onSelectRegion}) {
 const items=points.filter(p=>regions.some(r=>r.name===p.name));
 return <section className="panel map-panel"><div className="panel-heading"><div><div className="panel-title"><MapPin size={18}/>Peta Eksplorasi Wilayah</div><p className="panel-subtitle">Pilih titik untuk melihat wilayah · lokasi ilustratif</p></div><button className="panel-action" aria-label="Peta"><Maximize2 size={16}/></button></div>
 <div className="map-frame"><MapContainer center={[-7.8,112.5]} zoom={7} scrollWheelZoom={false} className="leaflet-map"><TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/><FitBounds items={items}/>{items.map(p=>{const selected=selectedRegion===p.name;const region=regions.find(r=>r.name===p.name);return <CircleMarker key={p.name} center={p.position} radius={selected?10:7} pathOptions={{color:selected?"#126bdb":"#fff",fillColor:selected?"#126bdb":"#25a879",fillOpacity:.95,weight:3}} eventHandlers={{click:()=>onSelectRegion(p.name)}}><Tooltip direction="top"><strong>{p.name}</strong><br/>{region?.puskesmas??"—"} fasilitas (data demo)</Tooltip></CircleMarker>;})}</MapContainer><div className="map-legend"><span><i className="legend-dot green"/>Contoh wilayah</span><span><i className="legend-dot blue"/>Dipilih</span></div></div>
 <div className="map-bottom"><span><strong>{regions.length}</strong> wilayah dalam tampilan</span><span className="map-data-note">Bukan batas administrasi resmi</span></div></section>;
}