# App Web Hermanos Jota (Sprint 5 y 6)

Aplicación web desarrollada para el **Sprint 5 y 6** del curso Full Stack Developer en ITBA. El objetivo de este sprint fue transformar la aplicación en un proyecto full-stack **persistente** y **completo**, dejando atrás los datos de prueba.
Se conectó la API de Express a una base de datos **MongoDB** en la nube (Atlas) y se implementó la funcionalidad **CRUD** (Crear, Leer, Actualizar, Borrar) completa para los productos, consumida desde un frontend de React con enrutamiento dinámico.

## 🚀 Enlaces del Proyecto

* https://github.com/mariacristinazerdanalzogaraiz-alt/sprint5y6itba

## 🧑‍💻 Integrantes

* María Cristina Zerdan Alzogaraiz
* Melina Sarli Ochat
* Leonardo Figueroa
* Tiziano Daniel Siilvestri

## 🏛️ Arquitectura y decisiones tomadas

La aplicación evoluciona a una arquitectura de tres capas:

**React Client (Frontend) <==> Express API (Backend) <==> MongoDB Database (Persistencia)**

* El **Frontend** (carpeta `/client`) se encarga de la interfaz de usuario. Utiliza **React Router DOM** para la navegación y la creación de rutas dinámicas (ej. `/productos/:id`).
* El **Backend** (carpeta `/backend` y `server.js`) actúa como una API RESTful. Gestiona la lógica de negocio y la conexión a la base de datos.
* La **Persistencia** se logra con una base de datos NoSQL (MongoDB Atlas), y la API interactúa con ella a través de **Mongoose** para definir esquemas y modelos.

## 📂 Estructura del proyecto

La estructura del monorepo se profesionalizó para incluir modelos y controladores en el backend:
```
SPRINT 5 Y 6/ 
├── server.js // Archivo principal del servidor Express 
├── .env // Variables de entorno (conexión a DB) 
├── backend/ │ 
   ├── routes/ │ 
      │ └── productRoutes.js // Define las 5 rutas CRUD │ 
   ├── controllers/ │ 
      │ └── productController.js // Lógica de las 5 rutas 
   │ └── models/ 
      │ └── Product.js // Esquema y Modelo de Mongoose │ 
├── client/ │ 
   ├── src/ │ │ 
   ├── pages/ // Componentes que son páginas completas │ │
      │ ├── Catalogo.jsx │ │
      │ ├── ProductDetail.jsx │ │
      │ ├── CreateProduct.jsx │ │ 
      │ └── Contacto.jsx │ │ 
   ├── components/ // Componentes reutilizables (Navbar, etc) │ 
   │ ├── App.js // Configuración de React Router │ │
   └── ... │
   └── ... 
└── README.md
```

## ✨ Funcionalidades implementadas

Se implementó un CRUD completo, conectando el frontend de React a la API del backend.

* **API RESTful (Backend):**
    * `GET /api/productos`: Devuelve todos los productos de MongoDB.
    * `GET /api/productos/:id`: Devuelve un único producto por su `_id`.
    * `POST /api/productos`: Crea un nuevo producto en la base de datos.
    * `PUT /api/productos/:id`: Actualiza un producto existente.
    * `DELETE /api/productos/:id`: Elimina un producto de la base de datos.

* **Catálogo de Productos (`/productos`):**
    * Hace `fetch` al endpoint real `GET /api/productos` para mostrar los productos desde la base de datos.
    * Maneja estados de "Cargando..." y "Error".

* **Página de Detalle Dinámica (`/productos/:id`):**
    * Utiliza el hook `useParams` de React Router para obtener el `id` de la URL.
    * Hace `fetch` al endpoint `GET /api/productos/:id` para mostrar la información de ese producto específico.

* **Creación de Productos (`/admin/crear-producto`):**
    * Un formulario controlado de React que envía los datos al endpoint `POST /api/productos`.
    * Al completarse con éxito, utiliza el hook `useNavigate` para redirigir al usuario al catálogo.

* **Eliminación de Productos:**
    * Un botón en la página de detalle (`/productos/:id`).
    * Al confirmarse, envía una petición `DELETE` al endpoint `/api/productos/:id`.
    * Utiliza `useNavigate` para redirigir al usuario de vuelta al catálogo.

## 🛠️ Tecnologías utilizadas

* **Frontend:** React, React Router DOM, HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **Base de Datos:** MongoDB (Atlas), Mongoose
* **Gestión de Entorno:** DotEnv
* **Control de versiones:** Git + GitHub

## 🚀 Cómo instalar y correr el proyecto

**Importante:** Este proyecto requiere una variable de entorno para la conexión a la base de datos.

#### 🔹 1. Clonar el repositorio

```bash
git clone [https://github.com/mariacristinazerdanalzogaraiz-alt/app-web-hermanos-jota.git](https://github.com/mariacristinazerdanalzogaraiz-alt/app-web-hermanos-jota.git)
cd app-web-hermanos-jota
```

#### 🔹 2. Crear archivo .env
En la raíz del proyecto (al mismo nivel que server.js), crea un archivo llamado .env y añade tu cadena de conexión de MongoDB Atlas:
```
MONGO_URI=mongodb+srv://tu_usuario:tu_contraseña@tu_cluster.mongodb.net/?appName=Cluster0
PORT=3001
```

#### 🔹 3. Instalar dependencias
Deberás instalar las dependencias tanto para el backend (en la raíz) como para el frontend (en /client).
```
# Instalar dependencias del backend (en la raíz)
npm install express mongoose dotenv cors

# Instalar dependencias del frontend
cd client
npm install react-router-dom
```

#### 🔹 4. Iniciar servidores
Abre dos terminales separadas.
Terminal 1 (Backend):
```
# Desde la carpeta raíz
node server.js
```
El servidor de la API correrá en http://localhost:3001

Terminal 2 (Frontend):
```
# Desde la carpeta /client
cd client
npm start
```
La aplicación de React se abrirá en http://localhost:3000
