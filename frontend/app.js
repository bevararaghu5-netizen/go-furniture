```javascript
const API = "/api";

let cart = JSON.parse(localStorage.getItem("goFurnitureCart") || "[]");

const products = [
  {
    id: 1,
    name: "Modern Sofa",
    description: "Three-seater premium fabric sofa",
    price: 24999,
    icon: "🛋️"
  },
  {
    id: 2,
    name: "King Size Bed",
    description: "Elegant wooden king size bed",
    price: 32499,
    icon: "🛏️"
  },
  {
    id: 3,
    name: "Accent Chair",
    description: "Comfortable chair for modern interiors",
    price: 8999,
    icon: "🪑"
  },
  {
    id: 4,
    name: "Storage Cabinet",
    description: "Minimal storage for your living space",
    price: 12499,
    icon: "🗄️"
  },
  {
    id: 5,
    name: "Dining Table",
    description: "Solid wood dining table for six",
    price: 18999,
    icon: "🍽️"
  },
  {
    id: 6,
    name: "Office Desk",
    description: "Clean and practical work desk",
    price: 10999,
    icon: "💼"
  },
  {
    id: 7,
    name: "Bookshelf",
    description: "Modern open bookshelf",
    price: 7499,
    icon: "📚"
  },
  {
    id: 8,
    name: "Coffee Table",
    description: "Compact table for living rooms",
    price: 5999,
    icon: "🪵"
  }
];

function money(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.style.display = "block";

  setTimeout(() => {
    el.style.display = "none";
  }, 1800);
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.length;
}

function loadProducts() {
  const grid = document.getElementById("productsGrid");

  grid.innerHTML = products.map(p => `
    <article class="card">
      <div class="pic">${p.icon}</div>

      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>

        <div class="row">
          <span class="price">${money(p.price)}</span>

          <button onclick="addToCart(${p.id})">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  if (!product) return;

  cart.push(product);

  localStorage.setItem("goFurnitureCart", JSON.stringify(cart));

  updateCart();
  toast(`${product.name} added to cart`);
}

document.getElementById("cartBtn").addEventListener("click", () => {
  if (!cart.length) {
    return toast("Your cart is empty");
  }

  toast(`${cart.length} item(s) in your cart`);
});

updateCart();
loadProducts();
```
