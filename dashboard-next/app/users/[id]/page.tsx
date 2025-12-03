interface UserPageProps {
  params: {
    id: string;
  };
}

export default function UserDetailPage({ params }: UserPageProps) {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Detalle del Usuario</h1>
      <p>ID recibido desde la URL: {params.id}</p>
      <p>Aquí más adelante mostraremos información real del usuario.</p>
    </main>
  );
}
