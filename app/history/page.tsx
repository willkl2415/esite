"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

// Focus region on Caribbean & Florida
const center = {
  lat: 21.5,
  lng: -78.0,
};

const cigarRegions = [
  { name: "Cuba", position: { lat: 21.5218, lng: -77.7812 } },
  { name: "Dominican Republic", position: { lat: 18.7357, lng: -70.1627 } },
  { name: "Nicaragua", position: { lat: 12.8654, lng: -85.2072 } },
  { name: "Honduras", position: { lat: 15.2000, lng: -86.2419 } },
  { name: "Florida (USA)", position: { lat: 27.9944, lng: -81.7603 } },
];

// Custom light map style (blue oceans, clean land)
const mapStyles = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#aadaff" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#f2efe9" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
];

export default function HistoryPage() {
  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold mb-4">
        🌍 The History of Cigars
      </h1>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
          options={{ styles: mapStyles }}
        >
          {cigarRegions.map((region, idx) => (
            <Marker key={idx} position={region.position} title={region.name} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
