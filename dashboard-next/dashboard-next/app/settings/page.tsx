"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Configuración</h1>

      <p>Opciones generales del sistema.</p>

      <div style={{ marginTop: "2rem" }}>
        <h3>Contador interactivo</h3>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>{count}</p>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "black",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Incrementar
        </button>
      </div>
    </main>
  );
}
