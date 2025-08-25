"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 20.0, // roughly Caribbean area
  lng: -75.0,
};

// Key cigar regions
const cigarPlaces = [
  { name: "Cuba", position: { lat: 21.5218, lng: -77.7812 } },
  { name: "Dominican Republic", position: { lat: 18.7357, lng: -70.1627 } },
  { name: "Nicaragua", position: { lat: 12.8654, lng: -85.2072 } },
  { name: "Honduras", position: { lat: 15.2000, lng: -86.2419 } },
  { name: "Florida", position: { lat: 27.9944, lng: -81.7603 } },
];

// Clean light map style
const MAP_STYLE = [
  {
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.arterial",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "road.highway",
    stylers: [{ color: "#dadada" }],
  },
  {
    featureType: "road.local",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    stylers: [{ color: "#c9e6ff" }],
  },
];

export default function HistoryPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        🌍 The History of Cigars
      </h1>
      {console.log("Google Maps API Key being used:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)}
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
          options={{ styles: MAP_STYLE }}
        >
          {cigarPlaces.map((place, index) => (
            <Marker key={index} position={place.position} title={place.name} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
