
import { StoreComponent } from '../components/Store';
import Link from 'next/link';
import Head from 'next/head';

const STATIC_PRODUCTS = [
    { id: 10, name: "Monitor 4K (SSG)", price: 450.00, category: "electronics", image: "🖥️" },
    { id: 11, name: "Silla Ergonómica (SSG)", price: 299.99, category: "clothing", image: "🪑" },
    { id: 12, name: "Taza de Café (SSG)", price: 15.50, category: "clothing", image: "☕" },
];

export default function StaticStore({ products }) {
  return (
    <div className="font-sans min-h-screen bg-gray-100">
        <Head>
          <title>Tienda Next.js SSG</title>
        </Head>
        <header className="bg-indigo-600 text-white p-4 shadow-xl">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">🏠 Tienda (SSG - Estático)</h1>
                <nav>
                    {/* El componente Link de Next.js permite la navegación */}
                    <Link href="/ssr" className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition">
                        Ver Tienda SSR
                    </Link>
                </nav>
            </div>
            <p className="text-sm text-indigo-200 ml-4">Productos cargados en **Tiempo de Construcción** con `getStaticProps`.</p>
        </header>
        {/* El componente principal recibe los productos pre-cargados */}
        <StoreComponent initialProducts={products} />
        <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600 mt-8">
            Página Principal (SSG) - Los datos no cambian con la recarga.
        </footer>
    </div>
  );
}

export async function getStaticProps() {
  console.log('Ejecutando getStaticProps: Datos estáticos listos.');

  return {
    props: {
      products: STATIC_PRODUCTS,
    },
  };
}