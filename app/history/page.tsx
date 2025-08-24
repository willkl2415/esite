"use client";

import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

const locations = [
  {
    name: "Cuba — Heart of Premium Cigars",
    position: { lat: 21.5218, lng: -77.7812 },
    text: "Cuba is the birthplace of the most famous cigars, known for its unique soil and tradition.",
  },
  {
    name: "Dominican Republic — Leading Producer",
    position: { lat: 18.7357, lng: -70.1627 },
    text: "Today, the Dominican Republic is the largest producer of premium cigars worldwide.",
  },
  {
    name: "Nicaragua — Bold Flavors",
    position: { lat: 12.8654, lng: -85.2072 },
    text: "Nicaragua has become famous for its rich, bold cigars from regions like Estelí.",
  },
  {
    name: "Honduras — Rising Star",
    position: { lat: 13.735, lng: -86.2419 },
    text: "Honduras is renowned for its earthy, strong cigars, especially from Danlí.",
  },
  {
    name: "Florida, USA — Gateway to the New World",
    position: { lat: 27.9944, lng: -81.7603 },
    text: "Tampa, Florida, was once called the 'Cigar Capital of the World' due to Cuban immigrants.",
  },
];

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = { lat: 20, lng: -75 }; // roughly central to cigar history countries

export default function HistoryPage() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        🌍 The History of Cigars
      </h1>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
          {locations.map((loc, index) => (
            <Marker
              key={index}
              position={loc.position}
              onClick={() => setSelected(loc)}
            />
          ))}
          {selected && (
            <InfoWindow
              position={selected.position}
              onCloseClick={() => setSelected(null)}
            >
              <div>
                <strong>{selected.name}</strong>
                <br />
                {selected.text}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
