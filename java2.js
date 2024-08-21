const products = [
    { name: "Brake Pads", price: 30, category: "brake", image: "img.jpg" },
    { name: "Air Filter", price: 20, category: "engine", image: "img1.webp" },
    { name: "Shock Absorber", price: 75, category: "suspension", image: "img2.jpg" },
    { name: "Oil Filter", price: 15, category: "engine", image: "img3.jpg" },
    { name: "Brake Rotor", price: 50, category: "brake", image: "img4.jpg" },
];

let cart = [];

function displayProducts(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

function filterProducts() {
    const category = document.getElementById('category').value;
    displayProducts(category);
}

function clearCart() {
    cart = [];
    updateCart();
}


displayProducts('all');
