const WHATSAPP = "573016146491";
const wa = (text) => `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(text)}`;

// Los productos viven en productos.js para poder administrarlos sin tocar la página.
const products = (window.CATALOGO && Array.isArray(window.CATALOGO.PRODUCTS) ? window.CATALOGO.PRODUCTS :  [
    {id:1,name:"Tapa cola",variant:"Plata",price:70000,image:"tapa-cola-plata.jpeg",images:["tapa-cola-plata.jpeg"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","plata","szr 150"],description:"Tapa cola para Yamaha SZR 150 con acabado en color plata."},
    {id:2,name:"Tapa cola",variant:"Verde",price:70000,image:"tapa-cola-verde.jpeg",images:["tapa-cola-verde.jpeg"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","verde","szr 150"],description:"Tapa cola para Yamaha SZR 150 con acabado en color verde."},
    {id:3,name:"Tapa cola",variant:"Roja",price:70000,image:"tapa-cola-roja.jpeg",images:["tapa-cola-roja.jpeg"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","roja","szr 150"],description:"Tapa cola para Yamaha SZR 150 con acabado en color rojo."},
    {id:4,name:"Tapa cola",variant:"Azul",price:70000,image:"tapa-cola-azul.jpeg",images:["tapa-cola-azul.jpeg"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","azul","szr 150"],description:"Tapa cola para Yamaha SZR 150 con acabado en color azul."},
    {id:5,name:"Tapa cola",variant:"Negra",price:70000,image:"tapa-cola-negra.jpeg",images:["tapa-cola-negra.jpeg"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","negra","szr 150"],description:"Tapa cola para Yamaha SZR 150 con acabado en color negro."},
    {id:6,name:"Tapa cola",variant:"Gris",price:70000,image:"tapa-cola-gris.jpeg",images:["tapa-cola-gris.jpeg"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","gris","szr 150"],description:"Tapa cola para Yamaha SZR 150 con acabado en color gris."},
    {id:7,name:"Tapa cola",variant:"Azul oscuro",price:70000,image:"tapa-cola-azul-oscura.jpeg",images:["tapa-cola-azul-oscura.jpeg"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","azul oscuro","szr 150"],description:"Tapa cola para Yamaha SZR 150 con acabado en azul oscuro."},
    {id:8,name:"Tapa cola",variant:"Blanca",price:70000,image:"tapa-cola-blanca.jpeg",images:["tapa-cola-blanca.jpeg"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","blanca","szr 150"],description:"Tapa cola para Yamaha SZR 150 con acabado en color blanco."},
    {id:9,name:"Cachos soporte parrilla",variant:"Blanco",price:100000,image:"cachos-szr-150-blanco.jpeg",images:["cachos-szr-150-blanco.jpeg"],category:"Soportes",brands:["Yamaha"],models:["SZR 150"],tags:["cachos","soporte parrilla","blanco","szr 150"],description:"Cachos para soporte de parrilla compatibles con Yamaha SZR 150."},
    {id:10,name:"Cachos soporte parrilla",variant:"Negro",price:100000,image:"cachos-szr-150-negro.jpeg",images:["cachos-szr-150-negro.jpeg"],category:"Soportes",brands:["Yamaha"],models:["SZR 150"],tags:["cachos","soporte parrilla","negro","szr 150"],description:"Cachos para soporte de parrilla compatibles con Yamaha SZR 150."},
    {id:11,name:"Cachetes / carenaje lateral",variant:"Azul / Plata / Negro / Azul oscuro / Negro mate / Rojo / Verde",price:40000,image:"cachetes-szr-150-1.jpeg",images:["cachetes-szr-150-1.jpeg","cachetes-szr-150-2.jpeg","cachetes-szr-150-3.jpeg","cachetes-szr-150-4.jpeg","cachetes-szr-150-5.jpeg","cachetes-szr-150-6.jpeg","cachetes-szr-150-7.jpeg"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["cachetes","carenaje","lateral","szr 150","tapas"],description:"Juego de cachetes o carenaje lateral para Yamaha SZR 150. Disponible en diferentes colores."}
    ,{id:12,name:"Visor Yamaha SZR 150",variant:"Rojo",price:30000,image:"visor-szr-150-rojo.jpeg",images:["visor-szr-150-rojo.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","rojo","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color rojo. Precio: $30.000."},
    {id:13,name:"Visor Yamaha SZR 150",variant:"Ahumado",price:30000,image:"visor-szr-150-ahumado.jpeg",images:["visor-szr-150-ahumado.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","ahumado","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color ahumado. Precio: $30.000."},
    {id:14,name:"Visor Yamaha SZR 150",variant:"Naranja",price:30000,image:"visor-szr-150-naranja.jpeg",images:["visor-szr-150-naranja.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","naranja","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color naranja. Precio: $30.000."},
    {id:15,name:"Visor Yamaha SZR 150",variant:"Azul",price:30000,image:"visor-szr-150-azul.jpeg",images:["visor-szr-150-azul.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","azul","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color azul. Precio: $30.000."},
    {id:16,name:"Visor Yamaha SZR 150",variant:"Morado",price:30000,image:"visor-szr-150-morado.jpeg",images:["visor-szr-150-morado.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","morado","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color morado. Precio: $30.000."},
    {id:17,name:"Visor Yamaha SZR 150",variant:"Negro",price:30000,image:"visor-szr-150-negro.jpeg",images:["visor-szr-150-negro.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","negro","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color negro. Precio: $30.000."},
    {id:18,name:"Visor Yamaha SZR 150",variant:"Transparente",price:30000,image:"visor-szr-150-transparente.jpeg",images:["visor-szr-150-transparente.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","transparente","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en transparente. Precio: $30.000."},
    {id:19,name:"Tapas de tanque SZR 150",variant:"Rojo",price:100000,image:"tapas-tanque-szr-150-rojo.png",images:["tapas-tanque-szr-150-rojo.png"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapas de tanque","tanque","rojo","szr 150"],description:"Tapas de tanque para Yamaha SZR 150. Variante roja. Precio: $100.000."},
    {id:20,name:"Tapas de tanque SZR 150",variant:"Negro",price:100000,image:"tapas-tanque-szr-150-negro.png",images:["tapas-tanque-szr-150-negro.png"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapas de tanque","tanque","negro","szr 150"],description:"Tapas de tanque para Yamaha SZR 150. Variante negra. Precio: $100.000."},
    {id:21,name:"Tapas de tanque SZR 150",variant:"Gris",price:100000,image:"tapas-tanque-szr-150-gris.png",images:["tapas-tanque-szr-150-gris.png"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapas de tanque","tanque","gris","szr 150"],description:"Tapas de tanque para Yamaha SZR 150. Variante gris. Precio: $100.000."},
    {id:22,name:"Tapas de tanque SZR 150",variant:"Blanco",price:100000,image:"tapas-tanque-szr-150-blanco.png",images:["tapas-tanque-szr-150-blanco.png"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapas de tanque","tanque","blanco","szr 150"],description:"Tapas de tanque para Yamaha SZR 150. Variante blanca. Precio: $100.000."}
  ]);

const brands = [
  {name:"Yamaha", logo:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Yamaha_Motor_2025.svg", models:["SZR 150","Libero","XT 660","NMAX V1","NMAX Connected V2","NMAX Connected V3","BWS FI"]},
  {name:"Bajaj", logo:"https://upload.wikimedia.org/wikipedia/commons/c/c0/Bajaj_Motorcycles_logo.svg", models:["Pulsar 180","Pulsar 135","NS 150","NS 160","NS 200","Boxer CT","Discover 100","Discover 125","Discover 135","Discover ST"]}
];

const categories = [
  ["Tapas","Piezas para renovar o reemplazar tu moto","◈"],
  ["Visores","Visores y piezas para el frente","◇"],
  ["Soportes","Soportes, cachos y parrillas","⌁"],
  ["Accesorios","Complementos para tu moto","✦"],
  ["Tornillería","Herrajes y fijaciones","⊙"],
  ["Repuestos varios","Consulta por la pieza que buscas","⚙"]
];

const money=n=>new Intl.NumberFormat('es-CO').format(n);
let selectedBrand=null, selectedModel=null, activeCategory='Todas', currentProducts=products;
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

function renderBrands(){
  $('#brandGrid').innerHTML=brands.map(b=>`<button class="brand-card" data-brand="${b.name}"><img class="brand-logo" src="${b.logo}" alt="Logo ${b.name}"><strong>${b.name}</strong><small>Ver motos →</small></button>`).join('');
  $$('.brand-card').forEach(b=>b.onclick=()=>selectBrand(b.dataset.brand));
}

function modelImageKey(model){
  const map={
    "SZR 150":"https://http2.mlstatic.com/D_961997-MLM105274581923_012026-C.jpg",
    "Libero":"https://images.carandbike.com/bike-images/large/yamaha/libero/yamaha-libero.jpg?v=4",
    "XT 660":"https://images5.1000ps.net/images_bikekat/2016/4-Yamaha/1667-XT66R/gr.jpg",
    "NMAX V1":"https://storage.googleapis.com/bm-garage-image-bucket/1657976291623-YAMAHA%20NMAX%20155%20V1.png",
    "NMAX Connected V2":"https://m.alfascorpii.co.id/4D4M4L1K/assets/gambar_blog/berita_536_20230109103506.jpg",
    "NMAX Connected V3":"https://http2.mlstatic.com/D_Q_NP_2X_835551-MCO106017521139_012026-E.webp",
    "BWS FI":"https://www.fpmoto.com/pub/media/wysiwyg/Thomas/Motos/BWS_2021_Azul_Claro.jpg",
    "Pulsar 180":"https://asset.autocarindia.com/static/models/colors/20260409_095623_97fd8fe3.webp",
    "Pulsar 135":"https://ic4.maxabout.us/autos/tw_india/2/2016/12/2017-bajaj-pulsar-135-laser-black.jpg",
    "NS 150":"https://d3bmp4azzreq60.cloudfront.net/fit-in/2000x2000/vendetunave/images/vehiculos/69252264d2691.jpeg",
    "NS 160":"https://catalogoni.elverdugo.net/images/thumbs/0043705_motocicleta-bajaj-pulsar-ns-160-2022precio-no-incluye-gastos-de-inscripcion.jpeg",
    "NS 200":"https://i5-mx.walmartimages.com/mg/gm/3pp/asr/8960f878-4569-470b-9246-3f5e77fb348e.4e272998987a230c0332186a70c8de10.jpeg?odnBg=FFFFFF&odnHeight=612&odnWidth=612",
    "Boxer CT":"https://images.ctfassets.net/8zlbnewncp6f/qktVHm6UI254L4ozhDYYt/1ded214456d85392cd57534f8f1f8ee9/Bajaj_Boxer_CT100_KS_04.jpg",
    "Discover 100":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201510/1446127786_bajaj-discover-100_647_103015063010.jpg?VersionId=4hNm28GRdE.xDIPvJUuBJiOJ1TtxvJ2C&size=690%3A388",
    "Discover 125":"https://www.motorbeam.com/wp-content/uploads/2015-Bajaj-Discover-1200x900.jpg",
    "Discover 135":"https://image3.mouthshut.com/images/ImagesR/2016/5/925601937-2988792-1.jpg?rnd=10752",
    "Discover ST":"logo.png"
  };
  return map[model] || '';
}

function selectBrand(name){
  selectedBrand=name; const b=brands.find(x=>x.name===name);
  $('#selectedBrandLabel').textContent=name.toUpperCase(); $('#modelGrid').innerHTML=b.models.map(m=>{const key=modelImageKey(m); return `<button class="model-card" data-model="${m}"><span class="model-placeholder"><img src="${key}" alt="Moto ${m}" loading="lazy"></span><span><b>${m}</b><small>${products.some(p=>p.brands.includes(name)&&p.models.includes(m))?'Productos disponibles':'Consultar disponibilidad'}</small></span><i>›</i></button>`}).join('');
  $('#modelSection').classList.remove('hidden'); $('#motoSection').classList.add('hidden'); document.getElementById('modelSection').scrollIntoView({behavior:'smooth',block:'start'});
  $$('.model-card').forEach(x=>x.onclick=()=>selectModel(x.dataset.model));
}
function selectModel(model){
  selectedModel=model; $('#motoBrand').textContent=selectedBrand.toUpperCase(); $('#motoTitle').textContent=model; $('#modelSection').classList.add('hidden'); $('#motoSection').classList.remove('hidden');
  $('#categoryGrid').innerHTML=categories.map(c=>`<button class="category-card" data-cat="${c[0]}"><span>${c[2]}</span><b>${c[0]}</b><small>${c[1]}</small><em>Ver productos →</em></button>`).join('');
  $$('.category-card').forEach(x=>x.onclick=()=>showProducts(selectedBrand,selectedModel,x.dataset.cat));
  showProducts(selectedBrand,selectedModel,'Todas',false);
  $('#motoSection').scrollIntoView({behavior:'smooth',block:'start'});
}
function showProducts(brand=null,model=null,cat='Todas',scroll=true){
  activeCategory=cat; currentProducts=products.filter(p=>(!brand||p.brands.includes(brand))&&(!model||p.models.includes(model))&&(cat==='Todas'||p.category===cat));
  $('#productsTitle').textContent=brand&&model?`${model} — PRODUCTOS`:'PRODUCTOS DESTACADOS';
  $('#productsSub').textContent=brand&&model?`Repuestos y accesorios compatibles con ${brand} ${model}.`:'Explora nuestras piezas y accesorios disponibles.';
  $$('.filter').forEach(x=>x.classList.toggle('active',x.dataset.cat===cat)); renderProducts(currentProducts);
  if(scroll) $('#catalogo').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderProducts(list){
  $('#products').innerHTML=list.map(p=>`<article class="product" data-id="${p.id}"><div class="product-image"><img src="${p.image}" alt="${p.name} ${p.variant}" loading="lazy"><span class="tag">DISPONIBLE</span></div><div class="product-info"><span class="product-type">${p.category.toUpperCase()}</span><h3>${p.name}</h3><small>${p.variant}</small><div class="product-bottom"><strong>$${money(p.price)}</strong><button type="button">VER PRODUCTO →</button></div></div></article>`).join('');
  $('#emptyState').classList.toggle('hidden',list.length>0); $$('.product').forEach(x=>x.onclick=()=>openProduct(products.find(p=>p.id==x.dataset.id)));
}
let activeProduct=null;
function openProduct(p){
  activeProduct=p;
  const images=(p.images&&p.images.length?p.images:[p.image]).filter(Boolean);
  $('#modalImage').src=images[0]; $('#modalImage').alt=p.name;
  $('#modalName').textContent=p.variant?`${p.name} — ${p.variant}`:p.name;
  $('#modalPrice').textContent=`$${money(p.price)} COP`;
  $('#modalCompatibility').textContent=`Compatible con: ${p.brands.join(', ')} ${p.models.join(', ')}`;
  $('#modalDescription').textContent=p.description||'';
  $('#modalDescription').classList.toggle('hidden',!p.description);
  $('#modalTags').innerHTML=(p.tags||[]).map(t=>`<span>${t}</span>`).join('');
  $('#modalThumbs').innerHTML=images.map((src,i)=>`<button class="modal-thumb ${i===0?'active':''}" type="button" data-image="${src}" aria-label="Ver foto ${i+1}"><img src="${src}" alt="${p.name} foto ${i+1}"></button>`).join('');
  $$('.modal-thumb').forEach((thumb,i)=>thumb.onclick=(e)=>{e.stopPropagation(); $('#modalImage').src=thumb.dataset.image; $$('.modal-thumb').forEach(t=>t.classList.remove('active')); thumb.classList.add('active');});
  $('#modalWhatsapp').href=wa(`Hola, JHONY HENAO. Estoy interesado en ${p.name}${p.variant?` — ${p.variant}`:''} por $${money(p.price)}. ¿Me confirman disponibilidad y envío?`);
  $('#addToCart').onclick=()=>addToCart(p);
  $('#productModal').classList.add('open'); document.body.classList.add('no-scroll');
}
const CART_KEY='jhony_henao_cart_v1';
let cart=JSON.parse(localStorage.getItem(CART_KEY)||'[]');
function saveCart(){localStorage.setItem(CART_KEY,JSON.stringify(cart));renderCart();}
function addToCart(p){
  const found=cart.find(x=>x.id===p.id);
  if(found) found.qty++; else cart.push({id:p.id,qty:1});
  saveCart(); openCart(); closeModal();
}
function cartDetails(){return cart.map(x=>({item:x,p:products.find(p=>p.id===x.id)})).filter(x=>x.p);}
function renderCart(){
  const rows=cartDetails(); const count=rows.reduce((a,x)=>a+x.item.qty,0); const total=rows.reduce((a,x)=>a+x.p.price*x.item.qty,0);
  $('#cartCount').textContent=count; $('#cartTotal').textContent='$'+money(total);
  $('#cartItems').innerHTML=rows.map(({item,p})=>`<div class="cart-item"><img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><small>${p.variant||''}</small><strong>$${money(p.price*item.qty)}</strong><div class="qty"><button data-action="minus" data-id="${p.id}">−</button><span>${item.qty}</span><button data-action="plus" data-id="${p.id}">+</button></div></div><button class="remove-item" data-action="remove" data-id="${p.id}">Quitar</button></div>`).join('');
  $('#cartEmpty').classList.toggle('hidden',rows.length>0); $('#checkoutBtn').disabled=rows.length===0;
  $$('#cartItems [data-action]').forEach(b=>b.onclick=()=>{const id=Number(b.dataset.id),a=b.dataset.action,found=cart.find(x=>x.id===id); if(a==='remove') cart=cart.filter(x=>x.id!==id); else if(found){found.qty+=a==='plus'?1:-1;if(found.qty<1)cart=cart.filter(x=>x.id!==id);} saveCart();});
}
function openCart(){$('#cartDrawer').classList.add('open');document.body.classList.add('no-scroll');$('#customerForm').classList.add('hidden');$('#cartItems').classList.remove('hidden');$('#cartDrawer').setAttribute('aria-hidden','false');}
function closeCart(){$('#cartDrawer').classList.remove('open');document.body.classList.remove('no-scroll');$('#cartDrawer').setAttribute('aria-hidden','true');}
function checkout(){if(!cart.length)return;$('#cartItems').classList.add('hidden');$('#cartEmpty').classList.add('hidden');$('#customerForm').classList.remove('hidden');$('#checkoutBtn').parentElement.classList.add('hidden');}
function backToCart(){$('#customerForm').classList.add('hidden');$('#cartItems').classList.remove('hidden');$('#checkoutBtn').parentElement.classList.remove('hidden');$('#cartEmpty').classList.toggle('hidden',cart.length>0);}
function submitOrder(e){
  e.preventDefault(); const rows=cartDetails(); if(!rows.length)return;
  const name=$('#customerName').value.trim(),phone=$('#customerPhone').value.trim(),city=$('#customerCity').value.trim(),address=$('#customerAddress').value.trim(),note=$('#customerNote').value.trim();
  let total=0, lines=rows.map(({item,p})=>{const sub=p.price*item.qty;total+=sub;return `• ${p.name}${p.variant?` — ${p.variant}`:''} x${item.qty}: $${money(sub)}`;}).join('\n');
  const text=`Hola, JHONY HENAO. Quiero realizar este pedido:\n\n${lines}\n\nTOTAL: $${money(total)} COP\n\nDATOS DEL CLIENTE\nNombre: ${name}\nCelular: ${phone}\nCiudad: ${city}\nDirección: ${address}${note?`\nNota: ${note}`:''}\n\nPor favor confirmen disponibilidad, valor del envío y forma de pago.`;
  window.open(wa(text),'_blank');
}

function closeModal(){ $('#productModal').classList.remove('open'); document.body.classList.remove('no-scroll'); }

renderBrands(); renderProducts(products);
$('#year').textContent=new Date().getFullYear();
$('#backBrands').onclick=()=>{$('#modelSection').classList.add('hidden');$('#motoSection').classList.add('hidden');$('#motos').scrollIntoView({behavior:'smooth'});};
$('#backModels').onclick=()=>{selectBrand(selectedBrand);};
$('#showMotoProducts').onclick=()=>showProducts(selectedBrand,selectedModel,'Todas');
$('#showAllProducts').onclick=()=>showProducts(null,null,'Todas');
$('#allBrands').onclick=()=>{$('#modelSection').classList.add('hidden');$('#motoSection').classList.add('hidden');$('#motos').scrollIntoView({behavior:'smooth'});};
$$('.filter').forEach(x=>x.onclick=()=>showProducts(selectedBrand,selectedModel,x.dataset.cat));
$('#modalClose').onclick=closeModal; $('#modalBackdrop').onclick=closeModal; document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
$('#menuBtn').onclick=()=>$('#mobileMenu').classList.toggle('open');
$$('#mobileMenu a').forEach(a=>a.onclick=()=>$('#mobileMenu').classList.remove('open'));
$('.search-toggle').onclick=()=>{ $('#searchInput').focus(); $('#buscar').scrollIntoView({behavior:'smooth',block:'center'}); };
$('#clearSearch').onclick=()=>{ $('#searchInput').value=''; renderProducts(products); $('#productsTitle').textContent='PRODUCTOS DESTACADOS'; $('#productsSub').textContent='Explora nuestras piezas y accesorios disponibles.'; };
$('#searchInput').addEventListener('input',e=>{const q=e.target.value.toLowerCase().trim(); if(!q){renderProducts(products);return;} const list=products.filter(p=>(p.name+' '+p.variant+' '+p.category+' '+p.brands.join(' ')+' '+p.models.join(' ')+' '+p.tags.join(' ')+' '+(p.description||'')).toLowerCase().includes(q)); $('#productsTitle').textContent=`RESULTADOS: ${e.target.value}`; $('#productsSub').textContent=`${list.length} producto(s) encontrado(s)`; renderProducts(list); $('#catalogo').scrollIntoView({behavior:'smooth',block:'start'});});
$$('.search-hint button').forEach(b=>b.onclick=()=>{ $('#searchInput').value=b.dataset.search; $('#searchInput').dispatchEvent(new Event('input')); });

renderCart();
$('#cartBtn').onclick=openCart; $('#cartClose').onclick=closeCart; $('#cartBackdrop').onclick=closeCart;
$('#checkoutBtn').onclick=checkout; $('#backCart').onclick=backToCart; $('#customerForm').onsubmit=submitOrder;
