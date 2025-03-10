// document.addEventListener("DOMContentLoaded", function () {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     updateCartUI();

//     // Add to Cart Functionality
//     document.querySelectorAll(".add-to-cart").forEach(button => {
//         button.addEventListener("click", function () {
//             const productId = this.getAttribute("data-id");
//             const productName = this.getAttribute("data-name");
//             const productPrice = parseFloat(this.getAttribute("data-price"));

//             const existingProduct = cart.find(item => item.id === productId);

//             if (existingProduct) {
//                 existingProduct.quantity += 1;
//             } else {
//                 cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
//             }

//             localStorage.setItem("cart", JSON.stringify(cart));
//             updateCartUI();
//         });
//     });

//     // Update Cart UI
//     function updateCartUI() {
//         const cartItemsContainer = document.getElementById("cart-items");
//         cartItemsContainer.innerHTML = "";

//         cart.forEach(item => {
//             const cartItem = document.createElement("div");
//             cartItem.classList.add("cart-item");
//             cartItem.innerHTML = `
//                 <p>${item.name} - $${(item.price * item.quantity).toFixed(2)} (${item.quantity})</p>
//                 <button class="decrease-item" data-id="${item.id}">-</button>
//                 <button class="increase-item" data-id="${item.id}">+</button>
//                 <button class="remove-item" data-id="${item.id}">Remove</button>
//             `;
//             cartItemsContainer.appendChild(cartItem);
//         });

//         attachCartEventListeners();
//     }

//     // Attach Event Listeners for Cart Actions
//     function attachCartEventListeners() {
//         document.querySelectorAll(".increase-item").forEach(button => {
//             button.addEventListener("click", function () {
//                 const productId = this.getAttribute("data-id");
//                 const product = cart.find(item => item.id === productId);
//                 if (product) product.quantity += 1;
//                 localStorage.setItem("cart", JSON.stringify(cart));
//                 updateCartUI();
//             });
//         });

//         document.querySelectorAll(".decrease-item").forEach(button => {
//             button.addEventListener("click", function () {
//                 const productId = this.getAttribute("data-id");
//                 const product = cart.find(item => item.id === productId);
//                 if (product && product.quantity > 1) {
//                     product.quantity -= 1;
//                 } else {
//                     cart = cart.filter(item => item.id !== productId);
//                 }
//                 localStorage.setItem("cart", JSON.stringify(cart));
//                 updateCartUI();
//             });
//         });

//         document.querySelectorAll(".remove-item").forEach(button => {
//             button.addEventListener("click", function () {
//                 const productId = this.getAttribute("data-id");
//                 cart = cart.filter(item => item.id !== productId);
//                 localStorage.setItem("cart", JSON.stringify(cart));
//                 updateCartUI();
//             });
//         });
//     }

//     // Checkout Button Click
//     const checkoutBtn = document.getElementById("checkout-btn");
//     if (checkoutBtn) {
//         checkoutBtn.addEventListener("click", function () {
//             if (cart.length === 0) {
//                 alert("Your cart is empty!");
//                 return;
//             }
//             showDeliveryForm();
//         });
//     }

//     // Show Delivery Form
//     function showDeliveryForm() {
//         document.getElementById("delivery-section").style.display = "block";

//         const deliveryForm = document.getElementById("delivery-form");
//         deliveryForm.removeEventListener("submit", handleDeliveryFormSubmit); // Prevent multiple listeners
//         deliveryForm.addEventListener("submit", handleDeliveryFormSubmit);
//     }

//     // Handle Delivery Form Submission
//     function handleDeliveryFormSubmit(event) {
//         event.preventDefault();
        
//         const fullName = document.getElementById("full-name").value.trim();
//         const address = document.getElementById("address").value.trim();
//         const phone = document.getElementById("phone").value.trim();

//         if (!fullName || !address || !phone) {
//             showMessage("All fields are required!", "error", "delivery-message");
//             return;
//         }

//         showMessage(`Thank you, ${fullName}! Your order will be delivered to ${address}.`, "success", "delivery-message");

//         cart = [];
//         localStorage.removeItem("cart");
//         updateCartUI();

//         setTimeout(() => {
//             document.getElementById("delivery-section").style.display = "none";
//         }, 5000);
//     }

//     // Display Message
//     function showMessage(message, type, targetId) {
//         const messageBox = document.getElementById(targetId);
//         if (messageBox) {
//             messageBox.textContent = message;
//             messageBox.style.color = type === "error" ? "red" : "green";
//         }
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartUI();

    // Add to Cart Functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            const productName = this.getAttribute("data-name");
            const productPrice = parseFloat(this.getAttribute("data-price"));

            let existingProduct = cart.find(item => item.id === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartUI();
        });
    });

    // Update Cart UI
    function updateCartUI() {
        const cartItemsContainer = document.getElementById("cart-items");
        cartItemsContainer.innerHTML = "";

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <p>${item.name} - $${(item.price * item.quantity).toFixed(2)} (${item.quantity})</p>
                <button class="decrease-item" data-id="${item.id}">-</button>
                <button class="increase-item" data-id="${item.id}">+</button>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        attachCartEventListeners();
    }

    // Attach Event Listeners for Cart Actions
    function attachCartEventListeners() {
        document.querySelectorAll(".increase-item").forEach(button => {
            button.addEventListener("click", function () {
                const productId = this.getAttribute("data-id");
                const product = cart.find(item => item.id === productId);
                if (product) {
                    product.quantity += 1;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    updateCartUI();
                }
            });
        });

        document.querySelectorAll(".decrease-item").forEach(button => {
            button.addEventListener("click", function () {
                const productId = this.getAttribute("data-id");
                const product = cart.find(item => item.id === productId);
                if (product) {
                    product.quantity -= 1;
                    if (product.quantity <= 0) {
                        cart = cart.filter(item => item.id !== productId);
                    }
                    localStorage.setItem("cart", JSON.stringify(cart));
                    updateCartUI();
                }
            });
        });

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const productId = this.getAttribute("data-id");
                cart = cart.filter(item => item.id !== productId);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartUI();
            });
        });
    }

    // Checkout Button Click
    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            showDeliveryForm();
        });
    }

    // Show Delivery Form
    function showDeliveryForm() {
        document.getElementById("delivery-section").style.display = "block";
        const deliveryForm = document.getElementById("delivery-form");

        deliveryForm.removeEventListener("submit", handleDeliveryFormSubmit); // Prevent multiple listeners
        deliveryForm.addEventListener("submit", handleDeliveryFormSubmit);
    }

    // Handle Delivery Form Submission
    function handleDeliveryFormSubmit(event) {
        event.preventDefault();

        const fullName = document.getElementById("full-name").value.trim();
        const address = document.getElementById("address").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (!fullName || !address || !phone) {
            showMessage("All fields are required!", "error", "delivery-message");
            return;
        }

        showMessage(`Thank you, ${fullName}! Your order will be delivered to ${address}.`, "success", "delivery-message");

        cart = [];
        localStorage.removeItem("cart");
        updateCartUI();

        setTimeout(() => {
            document.getElementById("delivery-section").style.display = "none";
        }, 5000);
    }

    // Display Message
    function showMessage(message, type, targetId) {
        const messageBox = document.getElementById(targetId);
        if (messageBox) {
            messageBox.textContent = message;
            messageBox.style.color = type === "error" ? "red" : "green";
        }
    }
});
