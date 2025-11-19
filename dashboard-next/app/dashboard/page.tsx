export default function DashboardPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={{
          padding: "20px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <h3>Usuarios</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>150</p>
        </div>

        <div style={{
          padding: "20px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <h3>Ventas</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>$2,300</p>
        </div>

        <div style={{
          padding: "20px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <h3>Tickets</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>23</p>
        </div>
      </div>
    </main>
  );
}

