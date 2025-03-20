# Hay que indicar que imagen queremos utilizar
FROM node:23.1-slim

# Indicamos el directorio de trabajo
WORKDIR /app

# Copiamos dependencias
COPY package*.json ./

# Hacemos la instalación de las dependencias y limpiamos la cache
RUN npm install \
    && npm cache clean --force \
    && rm -rf /tmp/* /root/.npm/_cacache

# Copiamos el resto de la instalación
COPY . .

# Indicamos el purto de la dependencia
EXPOSE 5000

# Arrancamos la imagen
CMD [ "npm", "start" ]

