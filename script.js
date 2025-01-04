document.querySelectorAll(".product-card button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});

// Dynamic Cart Functionality
let cart = [];

document.querySelectorAll(".product-card button").forEach((button, index) => {
    button.addEventListener("click", () => {
        const productCard = button.closest(".product-card");
        const productName = productCard.querySelector("h3").innerText;
        const productPrice = productCard.querySelector("p").innerText;

        cart.push({ name: productName, price: productPrice });
        alert(`${productName} added to the cart!`);
        console.log("Cart: ", cart);
    });
});
