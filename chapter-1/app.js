const products = [
    { id: 1, name: "Laptop Ultraligera", price: 1200.00, category: "electronics", image: "💻" },
    { id: 2, name: "Libro: Fundamentos de React", price: 35.50, category: "books", image: "📚" },
    { id: 3, name: "Auriculares Inalámbricos", price: 85.99, category: "electronics", image: "🎧" },
    { id: 4, name: "Camiseta de Algodón", price: 25.00, category: "clothing", image: "👕" },
    { id: 5, name: "Novela de Ficción", price: 18.75, category: "books", image: "📖" },
];

let cart = []; 

const productListEl = document.getElementById('product-list');
const cartListEl = document.getElementById('cart-list');
const cartTotalEl = document.getElementById('cart-total');
const categoryFilterEl = document.getElementById('category-filter');


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product); 
        renderCart();
    }
}

function renderProducts(filteredProducts) {
    productListEl.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="text-6xl text-center mb-2">${product.image}</div>
            <p class="product-name">${product.name}</p>
            <p class="product-price">Categoría: ${product.category}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Agregar al Carrito</button>
        `;
        
        const button = productCard.querySelector('.add-to-cart-btn');
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            addToCart(id);
        });

        productListEl.appendChild(productCard);
    });
}

function renderCart() {
    cartListEl.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartListEl.innerHTML = '<li class="text-gray-500 italic">El carrito está vacío.</li>';
        cartTotalEl.textContent = '0.00';
        return;
    }
    
    const cartItemsCount = cart.reduce((acc, item) => {
        acc[item.id] = (acc[item.id] || { ...item, count: 0 });
        acc[item.id].count++;
        return acc;
    }, {});

    Object.values(cartItemsCount).forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'flex justify-between items-center border-b pb-1 last:border-b-0';
        listItem.textContent = `${item.count}x ${item.name} ($${(item.price * item.count).toFixed(2)})`;
        cartListEl.appendChild(listItem);
        
        total += item.price * item.count;
    });

    cartTotalEl.textContent = total.toFixed(2);
}


categoryFilterEl.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    filterProducts(selectedCategory);
});

function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        renderProducts(filtered); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    filterProducts('all');
    renderCart();
});