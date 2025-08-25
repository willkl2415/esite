"use client";

export default function HistoryPage() {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundImage: "url('/caribbean-map.jpg')", // put this image inside /public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
        borderRadius: "12px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        🌍 The History of Cigars
      </h1>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
        The story of cigars begins in the Caribbean and Central America,
        spreading across the globe as a symbol of craftsmanship and tradition.
        Explore the regions famous for producing some of the world’s finest
        cigars, and learn how this heritage continues to thrive today.
      </p>
    </div>
  );
}
