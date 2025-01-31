# InverColombia - Dashboard

Este proyecto es un dashboard administrativo para la plataforma **InverColombia**.  
Utiliza **React.js** junto con **Material-UI** y se comunica con un backend a través de una API REST.

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el Repositorio  
```sh
git clone https://github.com/agarciactg/inverco-front
cd inverco-front
```

### 2️⃣ Instalar Dependencias
Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```sh
npm install
```

### 3️⃣ Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:

env

```sh
REACT_APP_API_BASE_URL=http://localhost:8000/api/v1
REACT_APP_API_KEY=tu_api_key
```

### 4️⃣ Construcción y Levantamiento con Docker
Si deseas ejecutar el proyecto con Docker, sigue estos pasos:

1. Construir los contenedores
```sh
docker-compose build
```

2. Levantar los servicios

```sh
docker-compose up -d
```


### 5️⃣ Iniciar el Proyecto en Desarrollo
Si prefieres correrlo sin Docker, usa:

```sh
npm start
```

#### Esto abrirá la aplicación en http://localhost:3000.
