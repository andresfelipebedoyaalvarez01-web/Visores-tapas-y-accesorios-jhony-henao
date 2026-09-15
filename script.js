const WHATSAPP = "573016146491";
const wa = (text) => `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(text)}`;

const products = [
  {id:1,name:"Tapa cola",variant:"Plata",price:70000,image:"tapa-cola-plata.jpeg",category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","plata","szr 150"]},
  {id:2,name:"Tapa cola",variant:"Verde",price:70000,image:"tapa-cola-verde.jpeg",category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","verde","szr 150"]},
  {id:3,name:"Tapa cola",variant:"Roja",price:70000,image:"tapa-cola-roja.jpeg",category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","roja","szr 150"]},
  {id:4,name:"Tapa cola",variant:"Azul",price:70000,image:"tapa-cola-azul.jpeg",category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","azul","szr 150"]},
  {id:5,name:"Tapa cola",variant:"Negra",price:70000,image:"tapa-cola-negra.jpeg",category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","negra","szr 150"]},
  {id:6,name:"Tapa cola",variant:"Gris",price:70000,image:"tapa-cola-gris.jpeg",category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","gris","szr 150"]},
  {id:7,name:"Tapa cola",variant:"Azul oscuro",price:70000,image:"tapa-cola-azul-oscura.jpeg",category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","azul oscuro","szr 150"]},
  {id:8,name:"Tapa cola",variant:"Blanca",price:70000,image:"tapa-cola-blanca.jpeg",category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapa cola","blanca","szr 150"]},
  {id:9,name:"Cachos soporte parrilla",variant:"Blanco",price:100000,image:"cachos-szr-150-blanco.jpeg",category:"Soportes",brands:["Yamaha"],models:["SZR 150"],tags:["cachos","soporte parrilla","blanco","szr 150"]},
  {id:10,name:"Cachos soporte parrilla",variant:"Negro",price:100000,image:"cachos-szr-150-negro.jpeg",category:"Soportes",brands:["Yamaha"],models:["SZR 150"],tags:["cachos","soporte parrilla","negro","szr 150"]}
];

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
  $('#brandGrid').innerHTML=brands.map((b,i)=>`<button class="brand-card" data-brand="${b.name}"><img class="brand-logo" src="${b.logo}" alt="Logo ${b.name}"><strong>${b.name}</strong><small>Ver motos →</small></button>`).join('');
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
    "Discover ST":"https://kissu.com.ec/imagenes/productos/lg/16625012980.jpg"
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
function openProduct(p){
  $('#modalImage').src=p.image; $('#modalImage').alt=p.name; $('#modalName').textContent=`${p.name} — ${p.variant}`; $('#modalPrice').textContent=`$${money(p.price)} COP`; $('#modalCategory').textContent=p.category; $('#modalCompatibility').textContent=`Compatible con: ${p.brands.join(', ')} ${p.models.join(', ')}`; $('#modalTags').innerHTML=p.tags.map(t=>`<span>${t}</span>`).join(''); $('#modalWhatsapp').href=wa(`Hola, JHONY HENAO. Estoy interesado en ${p.name} — ${p.variant} por $${money(p.price)}. ¿Me confirman disponibilidad y envío?`); $('#productModal').classList.add('open'); document.body.classList.add('no-scroll');
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
$('#searchInput').addEventListener('input',e=>{const q=e.target.value.toLowerCase().trim(); if(!q){renderProducts(products);return;} const list=products.filter(p=>(p.name+' '+p.variant+' '+p.category+' '+p.brands.join(' ')+' '+p.models.join(' ')+' '+p.tags.join(' ')).toLowerCase().includes(q)); $('#productsTitle').textContent=`RESULTADOS: ${e.target.value}`; $('#productsSub').textContent=`${list.length} producto(s) encontrado(s)`; renderProducts(list); $('#catalogo').scrollIntoView({behavior:'smooth',block:'start'});});
$$('.search-hint button').forEach(b=>b.onclick=()=>{ $('#searchInput').value=b.dataset.search; $('#searchInput').dispatchEvent(new Event('input')); });
