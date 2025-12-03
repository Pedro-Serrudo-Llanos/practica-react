import React, { useState, useMemo, useCallback } from 'react';
import { ShoppingCart, LayoutGrid, Filter, DollarSign } from 'lucide-react';

const INITIAL_PRODUCTS = [
    { id: 1, name: "Laptop Ultraligera", price: 1200.00, category: "electronics", image: "💻" },
    { id: 2, name: "Libro: Fundamentos de React", price: 35.50, category: "books", image: "📚" },
    { id: 3, name: "Auriculares Inalámbricos", price: 85.99, category: "electronics", image: "🎧" },
    { id: 4, name: "Camiseta de Algodón", price: 25.00, category: "clothing", image: "👕" },
    { id: 5, name: "Novela de Ficción", price: 18.75, category: "books", image: "📖" },
];

const CATEGORIES = [
    { value: 'all', label: 'Todas las Categorías' },
    { value: 'electronics', label: 'Electrónica' },
    { value: 'books', label: 'Libros' },
    { value: 'clothing', label: 'Ropa' },
];

/**
 * Componente Tarjeta de Producto
 * @param {object} product - Objeto producto
 * @param {function} onAddToCart - Función para agregar al carrito
 */
const ProductCard = React.memo(({ product, onAddToCart }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col">
            <div className="text-7xl text-center mb-4">{product.image}</div>
            <h3 className="text-xl font-semibold mb-1 text-gray-800">{product.name}</h3>
            <p className="text-sm text-indigo-600 font-medium mb-2">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            <p className="text-2xl font-bold text-gray-700 mt-auto mb-4">
                <DollarSign className="inline-block w-5 h-5 mr-1 align-sub text-green-600" />
                {product.price.toFixed(2)}
            </p>
            <button
                onClick={() => onAddToCart(product)}
                className="bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition duration-200 shadow-md"
            >
                Agregar al Carrito
            </button>
        </div>
    );
});

/**
 * Componente Filtros
 * @param {string} selectedCategory - Categoría seleccionada actualmente
 * @param {function} onCategoryChange - Función de manejo de cambio
 */
const Filters = React.memo(({ selectedCategory, onCategoryChange }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-700">
                <Filter className="w-6 h-6 mr-2 text-indigo-500" />
                Filtros
            </h2>
            <div className="flex flex-col space-y-2">
                <label htmlFor="category-filter" className="font-medium text-gray-600">Categoría:</label>
                <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                >
                    {CATEGORIES.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
});

/**
 * Componente Carrito de Compras
 * @param {array} cart - Array de ítems en el carrito
 * @param {number} total - Total calculado del carrito
 */
const Cart = React.memo(({ cart, total }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-700 border-b pb-2">
                <ShoppingCart className="w-6 h-6 mr-2 text-red-500" />
                Carrito de Compras
            </h2>
            <ul className="flex-grow space-y-3 mb-4 text-gray-600 overflow-y-auto pr-2">
                {cart.length === 0 ? (
                    <li className="text-gray-500 italic py-4 text-center">El carrito está vacío.</li>
                ) : (
                    cart.map((item, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded-md shadow-sm">
                            <span className="font-medium">{item.name}</span>
                            <span className="text-sm font-semibold text-gray-800">${item.price.toFixed(2)}</span>
                        </li>
                    ))
                )}
            </ul>
            <div className="mt-auto pt-4 border-t border-gray-200">
                <p className="font-extrabold text-2xl text-gray-800 flex justify-between">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </p>
            </div>
        </div>
    );
});

export default function App() {
    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState('all');

    const handleAddToCart = useCallback((product) => {
        setCart(prevCart => [...prevCart, product]);
    }, []);

    const handleFilterChange = useCallback((newFilter) => {
        setFilter(newFilter);
    }, []);

    const filteredProducts = useMemo(() => {
        if (filter === 'all') {
            return INITIAL_PRODUCTS;
        }
        return INITIAL_PRODUCTS.filter(product => product.category === filter);
    }, [filter]);

    const cartTotal = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price, 0);
    }, [cart]);


    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-gray-800 text-white p-4 shadow-xl">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold">🛒 Tienda React: Chapter 2</h1>
                    <p className="text-sm text-gray-400">Migración de JS puro a Componentes y Estado (`useState`)</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Columna 1: Filtros */}
                    <div className="lg:col-span-1">
                        <Filters selectedCategory={filter} onCategoryChange={handleFilterChange} />
                    </div>

                    {/* Columna 2: Lista de Productos */}
                    <main className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-700">
                            <LayoutGrid className="w-6 h-6 mr-2 text-blue-500" />
                            Catálogo ({filteredProducts.length} productos)
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    onAddToCart={handleAddToCart} 
                                />
                            ))}
                        </div>
                    </main>

                    {/* Columna 3: Carrito */}
                    <aside className="lg:col-span-1">
                        <Cart cart={cart} total={cartTotal} />
                    </aside>
                </div>
            </div>

            <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600 mt-8">
                Practica 3 - Chapter 2: React Migration | Uso de useState y Componentización
            </footer>
        </div>
    );
}