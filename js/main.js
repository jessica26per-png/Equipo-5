let cartItemsCount = 0; // Inicializa el contador del carrito

/**
 * Función que añade un producto al carrito.
 * @param {number} productId - El ID del producto.
 * @param {string} productName - El nombre del producto para el mensaje.
 */
function addToCart(productId, productName) {
    // 1. LÓGICA DE FUNCIONALIDAD: Aumentar el contador
    cartItemsCount++;

    // 2. ACTUALIZACIÓN VISUAL: Actualizar el número en el Header
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartItemsCount;
    }

    // 3. ANIMACIÓN Y TRANSICIÓN: Mostrar mensaje de confirmación
    displayConfirmationMessage(productName);

    // En un proyecto real, aquí se añadiría el producto a un array (el carrito)
    console.log(`Producto ${productId} (${productName}) añadido al carrito. Total: ${cartItemsCount}`);
}


/**
 * Muestra una animación de mensaje flotante para confirmar la acción.
 * @param {string} name - Nombre del producto añadido.
 */
function displayConfirmationMessage(name) {
    const messageElement = document.getElementById('confirmation-message');

    // Contenido del mensaje
    messageElement.textContent = `✅ "${name}" añadido!`;

    // Añadir clase 'show' para hacer el mensaje visible (transición CSS)
    messageElement.classList.add('show');

    // Quitar la clase 'show' después de 1.5 segundos (la animación se encarga del fade-out)
    setTimeout(() => {
        messageElement.classList.remove('show');
    }, 1500);
}