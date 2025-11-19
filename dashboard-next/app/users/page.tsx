export default function UsersPage() {
  const users = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com", role: "Admin" },
    { id: 2, name: "María Gómez", email: "maria@example.com", role: "Editor" },
    { id: 3, name: "Carlos López", email: "carlos@example.com", role: "User" },
  ];

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Usuarios</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ background: "#f5f5f5", textAlign: "left" }}>
            <th style={{ padding: "12px" }}>ID</th>
            <th style={{ padding: "12px" }}>Nombre</th>
            <th style={{ padding: "12px" }}>Email</th>
            <th style={{ padding: "12px" }}>Rol</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "12px" }}>{user.id}</td>
              <td style={{ padding: "12px" }}>{user.name}</td>
              <td style={{ padding: "12px" }}>{user.email}</td>
              <td style={{ padding: "12px" }}>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
