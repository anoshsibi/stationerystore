// script.js
let cart = [];

// Function to add an item to the cart
function addToCart(productName, productPrice, productImage) {
    const product = {
        name: productName,
        price: productPrice,
        image: productImage,
    };
    cart.push(product);
    updateCart();
    alert(`${productName} has been added to your cart.`);
}

// Function to update the cart in localStorage
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Ensure the cart is displayed immediately after adding an item
}

// Function to load the cart from localStorage
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    displayCart(); // Display the cart after loading it from localStorage
}

// Function to display the cart items and total
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const listItem = document.createElement('li');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const itemInfo = document.createElement('div');
        itemInfo.className = 'item-info';

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `Rs. ${item.price.toFixed(2)}`;

        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemPrice);

        listItem.appendChild(img);
        listItem.appendChild(itemInfo);
        cartItems.appendChild(listItem);

        total += item.price;
    });

    cartTotal.textContent = `Total: Rs. ${total.toFixed(2)}`;
}

// Ensure the cart is loaded and displayed when the page is loaded
document.addEventListener('DOMContentLoaded', loadCart);
