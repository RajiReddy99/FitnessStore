let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("✅ Added to cart");
}

// UPDATE CART COUNT
function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) {
    count.innerText = cart.length;
  }
}

// DISPLAY CART ITEMS
function loadCart() {
  const container = document.getElementById("cart-items");
  const totalBox = document.getElementById("total");

  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    container.innerHTML += `
      <div style="margin:10px; padding:10px; border:1px solid #ccc;">
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalBox.innerText = "Total: ₹" + total;
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
}

// SCROLL
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

// PASSWORD
function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === "Test@123") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    updateCartCount();
  } else {
    document.getElementById("error").innerText = "❌ Wrong Password!";
  }
}

// INIT
updateCartCount();
loadCart();