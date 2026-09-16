/*
 * CATÁLOGO DE PRODUCTOS — JHONY HENAO
 *
 * Para agregar un producto nuevo, solo añade otro objeto dentro de PRODUCTS.
 */
window.CATALOGO = {
  PRODUCTS: [
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

    {id:11,name:"Cachetes / carenaje lateral",variant:"Azul / Plata / Negro / Azul oscuro / Negro mate / Rojo / Verde",price:40000,image:"cachetes-szr-150-1.jpeg",images:["cachetes-szr-150-1.jpeg","cachetes-szr-150-2.jpeg","cachetes-szr-150-3.jpeg","cachetes-szr-150-4.jpeg","cachetes-szr-150-5.jpeg","cachetes-szr-150-6.jpeg","cachetes-szr-150-7.jpeg"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["cachetes","carenaje","lateral","szr 150","tapas"],description:"Juego de cachetes o carenaje lateral para Yamaha SZR 150. Disponible en diferentes colores."},

    {id:12,name:"Visor Yamaha SZR 150",variant:"Rojo",price:30000,image:"visor-szr-150-rojo.jpeg",images:["visor-szr-150-rojo.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","rojo","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color rojo. Precio: $30.000."},

    {id:13,name:"Visor Yamaha SZR 150",variant:"Ahumado",price:30000,image:"visor-szr-150-ahumado.jpeg",images:["visor-szr-150-ahumado.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","ahumado","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color ahumado. Precio: $30.000."},

    {id:14,name:"Visor Yamaha SZR 150",variant:"Naranja",price:30000,image:"visor-szr-150-naranja.jpeg",images:["visor-szr-150-naranja.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","naranja","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color naranja. Precio: $30.000."},

    {id:15,name:"Visor Yamaha SZR 150",variant:"Azul",price:30000,image:"visor-szr-150-azul.jpeg",images:["visor-szr-150-azul.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","azul","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color azul. Precio: $30.000."},

    {id:16,name:"Visor Yamaha SZR 150",variant:"Morado",price:30000,image:"visor-szr-150-morado.jpeg",images:["visor-szr-150-morado.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","morado","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color morado. Precio: $30.000."},

    {id:17,name:"Visor Yamaha SZR 150",variant:"Negro",price:30000,image:"visor-szr-150-negro.jpeg",images:["visor-szr-150-negro.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","negro","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en color negro. Precio: $30.000."},

    {id:18,name:"Visor Yamaha SZR 150",variant:"Transparente",price:30000,image:"visor-szr-150-transparente.jpeg",images:["visor-szr-150-transparente.jpeg"],category:"Visores",brands:["Yamaha"],models:["SZR 150"],tags:["visor","transparente","szr 150","yamaha"],description:"Visor para Yamaha SZR 150. Disponible en transparente. Precio: $30.000."},

    {id:19,name:"Tapas de tanque SZR 150",variant:"Rojo",price:100000,image:"tapas-tanque-szr-150-rojo.png",images:["tapas-tanque-szr-150-rojo.png"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapas de tanque","tanque","rojo","szr 150"],description:"Tapas de tanque para Yamaha SZR 150. Variante roja. Precio: $100.000."},

    {id:20,name:"Tapas de tanque SZR 150",variant:"Negro",price:100000,image:"tapas-tanque-szr-150-negro.png",images:["tapas-tanque-szr-150-negro.png"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapas de tanque","tanque","negro","szr 150"],description:"Tapas de tanque para Yamaha SZR 150. Variante negra. Precio: $100.000."},

    {id:21,name:"Tapas de tanque SZR 150",variant:"Gris",price:100000,image:"tapas-tanque-szr-150-gris.png",images:["tapas-tanque-szr-150-gris.png"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapas de tanque","tanque","gris","szr 150"],description:"Tapas de tanque para Yamaha SZR 150. Variante gris. Precio: $100.000."},

    {id:22,name:"Tapas de tanque SZR 150",variant:"Blanco",price:100000,image:"tapas-tanque-szr-150-blanco.png",images:["tapas-tanque-szr-150-blanco.png"],category:"Tapas",brands:["Yamaha"],models:["SZR 150"],tags:["tapas de tanque","tanque","blanco","szr 150"],description:"Tapas de tanque para Yamaha SZR 150. Variante blanca. Precio: $100.000."},

    {id:23,name:"Guardabarros delantero SZR 150",variant:"Azul",price:60000,image:"imagenes/guardabarros-szr-150-azul.jpg",images:["imagenes/guardabarros-szr-150-azul.jpg","imagenes/guardabarros-szr-150-rojo.png","imagenes/guardabarros-szr-150-plata.jpg","imagenes/guardabarros-szr-150-blanco.png","imagenes/guardabarros-szr-150-verde.png","imagenes/guardabarros-szr-150-negro.png","imagenes/guardabarros-szr-150-gris.jpg"],category:"Guardabarros",brands:["Yamaha"],models:["SZR 150"],tags:["guardabarros","guardabarros delantero","szr 150","yamaha"],description:"Guardabarros delantero para Yamaha SZR 150. Disponible en diferentes colores. Precio: $60.000."},

    {id:24,name:"Cachos para parrilla BWS FI",variant:"Disponible en varios colores",price:110000,image:"imagenes/cachos-parrilla-bws-fi-plata.jpg",images:["imagenes/cachos-parrilla-bws-fi-plata.jpg","imagenes/cachos-parrilla-bws-fi-plata-2.jpg","imagenes/cachos-parrilla-bws-fi-negro.jpg"],category:"Soportes",brands:["Yamaha"],models:["BWS FI"],tags:["cachos","parrilla","bws fi","soporte"],description:"Cachos para parrilla de Yamaha BWS FI. Se muestran tres variantes. Precio: $110.000."},

    {id:25,name:"Carenaje delantero SZR 150",variant:"Coca grande",price:40000,image:"imagenes/carenaje-delantero-szr-150-coca-grande.jpg",images:["imagenes/carenaje-delantero-szr-150-coca-grande.jpg"],category:"Carenajes",brands:["Yamaha"],models:["SZR 150"],tags:["carenaje","delantero","coca grande","szr 150"],description:"Carenaje delantero tipo coca grande para Yamaha SZR 150. Precio: $40.000."},

    {id:26,name:"Protector de mofle",variant:"Pequeño redondo",price:20000,image:"imagenes/protector-mofle-pequeno-redondo.jpg",images:["imagenes/protector-mofle-pequeno-redondo.jpg"],category:"Protectores",brands:["Yamaha"],models:["SZR 150"],tags:["protector","mofle","pequeño","redondo"],description:"Protector de mofle pequeño con estructura redonda, fabricado en plástico negro. Precio: $20.000."},

    {id:27,name:"Protector de mofle",variant:"Largo",price:30000,image:"imagenes/protector-mofle-largo.JPG",images:["imagenes/protector-mofle-largo.JPG"],category:"Protectores",brands:["Yamaha"],models:["SZR 150"],tags:["protector","mofle","largo"],description:"Protector de mofle largo, fabricado en plástico negro. Precio: $30.000."}
  ]
};
