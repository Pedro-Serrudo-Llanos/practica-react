
import { StoreComponent } from '../components/Store';
import Link from 'next/link';
import Head from 'next/head';

const getServerProducts = (time) => [
    { id: 20, name: `Oferta del Día @ ${time}`, price: 15.00, category: "electronics", image: "🔥" },
    { id: 21, name: "Boleto de Lotería", price: 5.00, category: "books", image: "🎟️" },
    { id: 22, name: "Cargador Rápido", price: 30.00, category: "electronics", image: "⚡" },
];

export default function SSRStore({ products, renderTime }) {
    return (
        <div className="font-sans min-h-screen bg-gray-100">
            <Head>
                <title>Tienda Next.js SSR</title>
            </Head>
            <header className="bg-red-600 text-white p-4 shadow-xl">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold">🚀 Tienda (SSR - Dinámico)</h1>
                    <nav>
                        <Link href="/" className="bg-white text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition">
                            Volver a SSG
                        </Link>
                    </nav>
                </div>
                <p className="text-sm text-red-200 ml-4">Productos cargados en **cada petición** con `getServerSideProps`.</p>
                <p className="text-xs text-red-200 ml-4 mt-1">Hora de renderizado en el servidor: {renderTime}</p>
            </header>
            <StoreComponent initialProducts={products} />
            <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600 mt-8">
                Página Dinámica (SSR) - Los datos cambian al recargar.
            </footer>
        </div>
    );
}

export async function getServerSideProps() {
  const now = new Date().toLocaleTimeString('es-ES', { hour12: false });
  console.log(`Ejecutando getServerSideProps: Petición a las ${now}`);

  return {
    props: {
      products: getServerProducts(now),
      renderTime: now,
    },
  };
}