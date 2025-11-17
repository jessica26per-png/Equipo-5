let cartItemsCount = 0; // VAlor 

function addToCart(productId, productName) {
    cartItemsCount++;

    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartItemsCount;
    }

    displayConfirmationMessage(productName);

    console.log(`Producto ${productId} (${productName}) añadido al carrito. Total: ${cartItemsCount}`);
}

function displayConfirmationMessage(name) {
    const messageElement = document.getElementById('confirmation-message');

    messageElement.innerHTML = `<i class="bi bi-cart-check-fill"></i>"${name}" añadido!`;

    messageElement.classList.add('show');

    setTimeout(() => {
        messageElement.classList.remove('show');
    }, 1500);
}