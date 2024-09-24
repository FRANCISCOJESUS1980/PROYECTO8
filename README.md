Proyecto de Gestión de Categorías y Productos

Este proyecto es una API RESTful para la gestión de categorías y productos, implementada con Node.js, Express, y MongoDB (utilizando Mongoose) y con integración de Cloudinary para la gestión de imágenes.

Requisitos del Proyecto

- Servidor con Express
- Conexión a una base de datos de MongoDB Atlas mediante Mongoose
- Creación de dos modelos (`Category` y `Product`), ambos con un campo para almacenar archivos
- Una semilla que suba datos a una de las colecciones
- Relación entre colecciones
- CRUD completo para ambas colecciones
- Documentación en README.md con detalles sobre los endpoints
- Subida de archivos mediante Cloudinary
- Eliminación de archivos en Cloudinary al eliminar registros de la base de datos
- Manejo adecuado de la gestión de imágenes en Cloudinary

Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB (Mongoose)
- Cloudinary
- Multer (para la carga de archivos)
- dotenv (para la gestión de variables de entorno)

Estructura del Proyecto

/proyecto8 │ ├── /config │ └── cloudinary.js # Configuración de Cloudinary │ ├── /controllers │ ├── categoryController.js # Controlador para las categorías │ └── productController.js # Controlador para los productos │ ├── /models │ ├── Category.js # Modelo de categoría │ └── Product.js # Modelo de producto │ ├── /routes │ ├── categoryRoutes.js # Rutas para las categorías │ └── productRoutes.js # Rutas para los productos │ ├── /services │ ├── categoryService.js # Lógica de negocio para categorías │ └── productService.js # Lógica de negocio para productos │ ├── /seeders │ └── seed.js # Script para inicializar datos │ ├── .env # Variables de entorno ├── package.json # Dependencias y scripts └── index.js # Punto de entrada de la aplicación

        USO

Iniciar el Servidor
Para iniciar el servidor, utiliza el siguiente comando:npm run dev
esto iniciara el servidor en http://localhost:3000

    Endpoints Disponibles

Categorías
Crear una nueva categoría
Listar todas las categorías
Obtener categoría por ID
Actualizar categoría
Eliminar categoría

Productos
Crear un nuevo producto
Listar todos los productos
Obtener producto por ID
Actualizar producto
Eliminar producto

Para inicializar datos en tu base de datos, puedes usar el script de semilla que se encuentra en la carpeta /seeders. Ejecuta el siguiente comando para cargar datos iniciales: node seeders/seed.js

Notas
Las imágenes subidas se gestionan mediante Cloudinary y se eliminan automáticamente cuando se elimina la categoría o producto correspondiente de la base de datos.
Asegúrate de que las imágenes que subas a Cloudinary se están utilizando efectivamente para evitar acumulaciones innecesarias.

Licencia
Este proyecto está bajo la Licencia de FRANCISCO JESUS
