// Lapisan transformasi data agar komponen UI tidak bergantung langsung pada sumber data.
export function getDashboardData(summary, regions) {
 const numeric = value => Number.isFinite(Number(value)) ? Number(value) : 0;
 return {
  summary: {puskesmas:numeric(summary?.puskesmas),tenagaKesehatan:numeric(summary?.tenagaKesehatan),kecamatan:numeric(summary?.kecamatan),label:summary?.label ?? "Data tidak tersedia"},
  regions: (Array.isArray(regions) ? regions : []).map(region => ({...region,puskesmas:numeric(region.puskesmas),tenagaKesehatan:numeric(region.tenagaKesehatan),kecamatan:numeric(region.kecamatan)}))
 };
}
// Integrasi FastAPI berikutnya dapat ditambahkan di sini menggunakan fetch dan VITE_API_BASE_URL.