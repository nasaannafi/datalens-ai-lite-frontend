import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import { MapPinned, ChevronDown, RotateCcw } from "lucide-react";
// Marker adalah titik ilustratif untuk interaksi UI, bukan batas administrasi atau koordinat fasilitas.
const points = [
  {name:"Surabaya",position:[-7.2575,112.7521]},{name:"Malang",position:[-7.9666,112.6326]},
  {name:"Sidoarjo",position:[-7.4478,112.7183]},{name:"Ponorogo",position:[-7.8682,111.4621]},
  {name:"Banyuwangi",position:[-8.2191,114.3691]},{name:"Jember",position:[-8.1724,113.7004]},
  {name:"Kediri",position:[-7.848,112.0178]},{name:"Madiun",position:[-7.6298,111.5239]}
];
function FitBounds({items}) {
  const map = useMap();
  useEffect(() => { if (items.length) map.fitBounds(items.map(p=>p.position), {padding:[22,22]}); }, [map, items]);
  return null;
}
export default function RegionMap({ regions, selectedRegion, onSelectRegion, indicator }) {
  const items = points.filter(p=>regions.some(r=>r.name===p.name));
  const selected = regions.find(r=>r.name===selectedRegion);
  const valueFor = r => indicator==="Tenaga Kesehatan" ? r.tenagaKesehatan : indicator==="Kecamatan" ? r.kecamatan : r.puskesmas;
  return <section className="panel map-panel">
    <div className="panel-heading map-heading"><div><div className="panel-title"><MapPinned size={20}/>Peta Jawa Timur</div><p className="panel-subtitle">Klik marker untuk melihat ringkasan wilayah · titik ilustratif</p></div><label className="map-display-select"><span>{indicator}</span><ChevronDown size={13}/></label></div>
    <div className="map-frame"><MapContainer center={[-7.8,112.5]} zoom={7} scrollWheelZoom={false} className="leaflet-map"><TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/><FitBounds items={items}/>{items.map(p=>{const region=regions.find(r=>r.name===p.name); const isSelected=selectedRegion===p.name; return <CircleMarker key={p.name} center={p.position} radius={isSelected?10:7} pathOptions={{color:isSelected?"#72c8ff":"#dceeff",fillColor:isSelected?"#0d67ff":"#45bfe5",fillOpacity:.95,weight:2}} eventHandlers={{click:()=>onSelectRegion(p.name)}}><Tooltip direction="top"><strong>{p.name}</strong><br/>{indicator}: {region ? valueFor(region) : "—"} (data demo)</Tooltip></CircleMarker>;})}</MapContainer>
      <div className="map-legend"><strong>{indicator}</strong><div className="legend-scale"><i/><i/><i/><i/><i/></div><div className="legend-range"><span>Rendah</span><span>Tinggi</span></div></div>
      <button className="reset-map" onClick={()=>onSelectRegion("Surabaya")}><RotateCcw size={12}/> Reset pilihan</button>
    </div>
    <div className="map-bottom"><span><strong>{items.length}</strong> marker wilayah ilustratif</span><span className="map-data-note">Bukan batas administrasi resmi</span></div>
  </section>;
}
