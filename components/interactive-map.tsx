"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default icon issues with Leaflet and Webpack/Vite
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
})

interface InteractiveMapProps {
  locations: {
    position: [number, number]
    name: string
    address: string
  }[]
  center: [number, number]
  zoom: number
}

export default function InteractiveMap({ locations, center, zoom }: InteractiveMapProps) {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, index) => (
          <Marker key={index} position={loc.position}>
            <Popup>
              <div className="p-3">
                <div className="font-bold text-gray-900 text-sm">{loc.name}</div>
                <div className="text-gray-600 text-sm">{loc.address}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
