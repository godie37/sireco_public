#back Dockerfile

# Usamos una imagen oficial de Node.js
FROM node:18

# Crear un directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto en el que corre tu aplicación
EXPOSE 3000

# Comando para correr la aplicación
CMD ["npm", "start"]