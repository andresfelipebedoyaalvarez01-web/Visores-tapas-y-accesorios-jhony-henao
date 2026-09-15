JHONY HENAO — ADMINISTRACIÓN DEL CATÁLOGO

La página usa catalogo/productos.js como archivo central de productos.

PARA AGREGAR UN PRODUCTO:
1. Copia sus imágenes en catalogo/productos/nombre-del-producto/
2. Abre catalogo/productos.js.
3. Duplica un objeto de producto y cambia:
   id, name, variant, price, image, images, category, brands, models, tags y description.
4. Guarda el archivo. No necesitas modificar index.html ni script.js.

IMÁGENES:
- Un producto puede tener una o varias fotos.
- La primera imagen de "images" es la foto principal.
- Al abrir el producto, las demás aparecen como miniaturas.

CATEGORÍAS DISPONIBLES:
Tapas, Visores, Soportes, Accesorios, Tornillería y Repuestos varios.

IMPORTANTE:
Las categorías y modelos que aparecen en la navegación siguen siendo parte de la estructura visual de la tienda. Los productos se filtran automáticamente por marca, modelo y categoría.
