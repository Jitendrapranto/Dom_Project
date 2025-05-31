let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalPrice = parseFloat(localStorage.getItem("totalPrice")) || 0;
const cartItems = document.getElementById("cart-items");
const adToCartButton = document.querySelectorAll(".addToCart");
const totalPriceElement = document.getElementById("total-price");
const buyNow = document.querySelector(".buy-now");

adToCartButton.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-name");
    const productPrice = parseFloat(button.getAttribute("data-price"));

    let existingProduct = cart.find((item) => item.name === productName);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        name: productName,
        price: productPrice,
        quantity: 1,
      });
    }

    totalPrice += productPrice;

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice", totalPrice.toFixed(2));

    updateCartDisplay();
  });
});

const updateCartDisplay = () => {
  cartItems.innerHTML = "";
  let li;
  cart.forEach((item, index) => {
    li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center mt-4";
    li.innerHTML = `${item.name} -> $${item.price} x ${item.quantity}
    <button class="btn btn-danger ms-auto remove-item" data-index="${index}">Remove</button>`;
    cartItems.appendChild(li);
  });

  totalPriceElement.textContent = totalPrice.toFixed(2);
  const removeButtons = document.querySelectorAll(".remove-item");

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      removeCartItem(index);
    });
  });
};

const removeCartItem = (index) => {
  const item = cart[index];
  const removePrice = item.price * item.quantity;
  totalPrice -= removePrice;
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("totalPrice", totalPrice.toFixed(2));
  updateCartDisplay();
};

buyNow.addEventListener("click", () => {
  if (cart.length > 0) {
    alert("Thank you for your purchase!");
    cart = [];
    totalPrice = 0;
    localStorage.removeItem("cart");
    localStorage.removeItem("totalPrice");
    updateCartDisplay();
  } else {
    alert("Your cart is empty.");
  }
});
window.addEventListener("DOMContentLoaded", updateCartDisplay);
