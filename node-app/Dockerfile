# Imagen base oficial de Node.js versión LTS ejecutada sobre Alpine Linux
FROM node:18-alpine

# Definimos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos los archivos de definición de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente de la aplicación
COPY . .

# Exponemos el puerto interno en el que escucha Node.js
EXPOSE 3000

# Comando por defecto para iniciar nuestra aplicación
CMD ["node", "index.js"]
