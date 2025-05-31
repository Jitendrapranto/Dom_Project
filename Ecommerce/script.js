let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalPrice = parseFloat(localStorage.getItem("totalPrice")) || 0;
const addToCart = document.querySelectorAll(".addToCart");
const cartItems = document.getElementById("cart-items");
let totalPriceElement = document.getElementById("total-price");
const buyNow = document.querySelector(".buy-now");
addToCart.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-name");
    let productPrice = parseFloat(button.getAttribute("data-price"));

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
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item mt-3 d-flex justify-content-between";
    li.innerHTML = `<span>${item.name} -> $${item.price} x ${item.quantity}</span>
      <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
      `;
    cartItems.appendChild(li);
  });

  totalPriceElement.textContent = parseFloat(totalPrice.toFixed(2));

  const removeItem = document.querySelectorAll(".remove-item");
  removeItem.forEach((button) => {
    button.addEventListener("click", () => {
      let index = button.getAttribute("data-index");
      deleteItem(index);
    });
  });
};

const deleteItem = (index) => {
  let item = cart[index];
  totalPrice -= item.price * item.quantity;
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("totalPrice", totalPrice.toFixed(2));
  updateCartDisplay();
};

buyNow.addEventListener("click", () => {
  if (cart.length == 0) {
    alert("Please purchase!");
    return;
  }
  alert("Thanks for your purchase!");
  cart = [];
  totalPrice = 0;
  localStorage.removeItem("cart");
  localStorage.removeItem("totalPrice");
  updateCartDisplay();
});
window.addEventListener("DOMContentLoaded", updateCartDisplay);
