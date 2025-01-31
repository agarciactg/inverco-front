FROM node:22.11.0

WORKDIR /app

# Copiamos package.json y package-lock.json para instalar las dependencias primero.
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto 3000
EXPOSE 3000

# Configuración del host y comando para iniciar el proyecto
ENV HOST 0.0.0.0
CMD ["npm", "start"]
