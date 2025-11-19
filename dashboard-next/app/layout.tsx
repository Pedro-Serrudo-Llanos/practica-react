export const metadata = {
  title: "Dashboard",
  description: "Panel administrativo con Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", height: "100vh" }}>

          {/* Sidebar */}
          <aside style={{
            width: "220px",
            background: "#1e293b",
            color: "white",
            padding: "20px"
          }}>
            <h2>Mi Dashboard</h2>
            <nav style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="/dashboard" style={{ color: "white" }}>Dashboard</a>
              <a href="/users" style={{ color: "white" }}>Usuarios</a>
              <a href="/settings" style={{ color: "white" }}>Ajustes</a>
            </nav>
          </aside>

          {/* Contenido */}
          <main style={{ flex: 1, padding: "20px" }}>
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
