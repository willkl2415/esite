"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useState } from "react";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const cigarCountries = [
  { name: "Cuba", coords: [-79.3832, 21.5218], text: "Birthplace of the world’s most iconic cigars. Cohiba, Montecristo, Partagás." },
  { name: "Dominican Republic", coords: [-70.1627, 18.7357], text: "Largest cigar exporter today. Arturo Fuente, Davidoff." },
  { name: "Nicaragua", coords: [-85.2072, 12.8654], text: "Bold, volcanic cigars. AJ Fernandez, Padron." },
  { name: "Honduras", coords: [-86.2419, 14.0821], text: "Earthy and authentic. Camacho, Alec Bradley." },
  { name: "Mexico", coords: [-102.5528, 23.6345], text: "San Andrés wrapper king. Sweet, chocolatey tones." },
  { name: "Brazil", coords: [-51.9253, -14.2350], text: "Mata Fina & Arapiraca. Sweet, rich notes." },
  { name: "Ecuador", coords: [-78.1834, -1.8312], text: "Perfect wrapper climate. Used in Dominican/Nicaraguan blends." },
  { name: "Cameroon", coords: [12.3547, 7.3697], text: "Famous Cameroon wrapper. Rare, spicy-sweet profile." },
  { name: "USA", coords: [-77.0369, 38.9072], text: "Connecticut Shade wrappers. Largest cigar consumer market." },
];

export default function HistoryPage() {
  const [tooltip, setTooltip] = useState<{ name: string; text: string } | null>(null);

  return (
    <div className="min-h-screen bg-[#ff9800] p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#000100]">🌍 The World of Cigars</h1>
      
      <div className="relative max-w-5xl mx-auto">
        <ComposableMap projection="geoMercator">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#fff"
                  stroke="#999"
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#CFAE70", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {cigarCountries.map((c, i) => (
            <Marker key={i} coordinates={c.coords}>
              <text
                textAnchor="middle"
                fontSize={20}
                onMouseEnter={() => setTooltip(c)}
                onMouseLeave={() => setTooltip(null)}
              >
                🚩
              </text>
            </Marker>
          ))}
        </ComposableMap>

        {tooltip && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 w-80 text-sm text-gray-800">
            <h2 className="font-bold text-lg mb-2">{tooltip.name}</h2>
            <p>{tooltip.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}
