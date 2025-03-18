document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const checkoutButton = document.getElementById("checkout-btn");
    const deliverySection = document.getElementById("delivery-section");
    const deliveryForm = document.getElementById("delivery-form");
    const deliveryMessage = document.getElementById("delivery-message");

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = "";
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }
        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button class="remove-from-cart" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        document.querySelectorAll(".remove-from-cart").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart.splice(index, 1);
                updateCartCount();
                updateCartDisplay();
            });
        });
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));
            cart.push({ name, price });
            updateCartCount();
            updateCartDisplay();
        });
    });

    checkoutButton.addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before proceeding.");
            return;
        }
        deliverySection.style.display = "block";
    });

    deliveryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const fullName = document.getElementById("full-name").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        
        deliveryMessage.innerHTML = `<p>Thank you, ${fullName}! Your order will be delivered to ${address}. We will contact you at ${phone}.</p>`;
        cart.length = 0;
        updateCartCount();
        updateCartDisplay();
        deliveryForm.reset();
    });
});
