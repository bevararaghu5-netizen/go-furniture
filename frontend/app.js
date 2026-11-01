const API = "/api";
let cart = JSON.parse(localStorage.getItem("goFurnitureCart") || "[]");

function money(n){return "₹" + Number(n).toLocaleString("en-IN");}
function toast(message){
  const el=document.getElementById("toast");
  el.textContent=message; el.style.display="block";
  setTimeout(()=>el.style.display="none",1800);
}
function updateCart(){document.getElementById("cartCount").textContent=cart.length;}

async function loadProducts(){
  const grid=document.getElementById("productsGrid");
  try{
    const res=await fetch(`${API}/products`);
    if(!res.ok) throw new Error("API error");
    const products=await res.json();
    grid.innerHTML=products.map(p=>`
      <article class="card">
        <div class="pic">${p.icon || "🪑"}</div>
        <div class="card-body">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="row">
            <span class="price">${money(p.price)}</span>
            <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
          </div>
        </div>
      </article>`).join("");
  }catch(e){
    grid.innerHTML="<p>Unable to load products. Please check the backend.</p>";
  }
}

function addToCart(product){
  cart.push(product);
  localStorage.setItem("goFurnitureCart",JSON.stringify(cart));
  updateCart();
  toast(`${product.name} added to cart`);
}

document.getElementById("cartBtn").addEventListener("click",()=>{
  if(!cart.length) return toast("Your cart is empty");
  toast(`${cart.length} item(s) in your cart`);
});

updateCart();
loadProducts();
