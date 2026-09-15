const WHATSAPP = "573016146491"; // WhatsApp de la tienda: código de país + número, sin +

const products = [
  {id:1, name:"Tapa cola — Plata", price:70000, image:"tapa-cola-plata.jpeg"},
  {id:2, name:"Tapa cola — Verde", price:70000, image:"tapa-cola-verde.jpeg"},
  {id:3, name:"Tapa cola — Roja", price:70000, image:"tapa-cola-roja.jpeg"},
  {id:4, name:"Tapa cola — Azul", price:70000, image:"tapa-cola-azul.jpeg"},
  {id:5, name:"Tapa cola — Negra", price:70000, image:"tapa-cola-negra.jpeg"},
  {id:6, name:"Tapa cola — Gris", price:70000, image:"tapa-cola-gris.jpeg"},
  {id:7, name:"Tapa cola — Azul oscuro", price:70000, image:"tapa-cola-azul-oscura.jpeg"},
  {id:8, name:"Tapa cola — Blanca", price:70000, image:"tapa-cola-blanca.jpeg"},
  {id:9, name:"Cachos soporte parrilla SZR 150 — Blanco", price:100000, image:"cachos-szr-150-blanco.jpeg"},
  {id:10, name:"Cachos soporte parrilla SZR 150 — Negro", price:100000, image:"cachos-szr-150-negro.jpeg"}
];

const money = n => new Intl.NumberFormat("es-CO").format(n);
const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalWhatsapp = document.getElementById("modalWhatsapp");

function waLink(productName = "un producto del catálogo") {
  const message = `Hola, JHONY HENAO. Estoy interesado en ${productName}. ¿Me pueden ayudar con disponibilidad, colores y envío?`;
  if (WHATSAPP.includes("X")) return "#contacto";
  return `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(message)}`;
}

function renderProducts(){
  const box = document.getElementById("products");
  box.innerHTML = products.map((p,i)=>`
    <article class="product" data-index="${i}">
      <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="tag">DISPONIBLE</span></div>
      <div class="product-info">
        <span class="product-type">TAPAS PARA MOTO</span>
        <h3>${p.name}</h3>
        <div class="product-bottom"><strong>$${money(p.price)}</strong><button type="button">VER PRODUCTO →</button></div>
      </div>
    </article>`).join("");

  box.querySelectorAll(".product").forEach(card=>{
    card.addEventListener("click",()=>openProduct(products[+card.dataset.index]));
  });
}

function openProduct(p){
  modalImage.src = p.image;
  modalImage.alt = p.name;
  modalName.textContent = p.name;
  modalPrice.textContent = `$${money(p.price)} COP`;
  modalWhatsapp.href = waLink(p.name);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("no-scroll");
}
function closeProduct(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("no-scroll");
}

document.getElementById("modalClose").onclick = closeProduct;
document.getElementById("modalBack").onclick = closeProduct;
document.getElementById("modalBackdrop").onclick = closeProduct;
document.addEventListener("keydown", e=>{if(e.key === "Escape") closeProduct();});

document.getElementById("mainWhatsapp").href = waLink();
document.getElementById("floatWhatsapp").href = waLink();
document.getElementById("headerWhatsapp").href = waLink();
document.getElementById("heroWhatsapp").href = waLink();
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
