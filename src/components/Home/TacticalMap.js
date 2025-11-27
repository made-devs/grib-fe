'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// --- 1. Custom Gold Icon (DivIcon) ---
// Kita bikin icon pakai CSS biar performa ringan & gampang dicustom warnanya
const createTacticalIcon = () => {
  return L.divIcon({
    className: 'custom-pin',
    html: `
      <div class="relative">
        <div class="w-4 h-4 bg-[#D4AF37] rounded-full border-2 border-black shadow-[0_0_15px_#D4AF37] relative z-10"></div>
        <div class="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-75"></div>
      </div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 8], // Tengah icon
    popupAnchor: [0, -10],
  });
};

// --- 2. Komponen Helper untuk FlyTo (Animasi Pindah) ---
function MapController({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 12, {
        duration: 2, // Durasi terbang (detik)
        easeLinearity: 0.25,
      });
    }
  }, [coords, map]);
  return null;
}

export default function TacticalMap({
  locations,
  selectedLocation,
  onMarkerClick,
}) {
  // Default Center (Indonesia)
  const defaultCenter = [-2.5489, 118.0149];
  const defaultZoom = 5;

  return (
    <>
      {/* Inject Leaflet CSS secara lokal jika belum ada di _app/layout */}
      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          background: rgba(10, 10, 10, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          color: white;
          font-family: 'Oswald', sans-serif;
        }
        .leaflet-popup-tip {
          background: rgba(10, 10, 10, 0.9);
        }
        .leaflet-container {
          background: #0a0a0a;
        }
      `}</style>

      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        style={{ height: '100%', width: '100%', background: '#0a0a0a' }}
        zoomControl={false} // Kita custom control nanti atau hide biar bersih
        scrollWheelZoom={false} // Biar ga ganggu scroll halaman
      >
        {/* --- TILE LAYER DARK MODE (GRATIS) --- */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* --- CONTROLLER --- */}
        <MapController coords={selectedLocation?.coords} />

        {/* --- MARKERS --- */}
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={loc.coords}
            icon={createTacticalIcon()}
            eventHandlers={{
              click: () => onMarkerClick(loc),
            }}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-[#D4AF37] uppercase tracking-wider">
                  {loc.city}
                </h3>
                <p className="text-xs text-gray-300">{loc.address}</p>
                <div className="mt-2 text-[10px] bg-green-900/50 text-green-400 px-2 py-0.5 rounded border border-green-800 inline-block">
                  STATUS: ONLINE
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
