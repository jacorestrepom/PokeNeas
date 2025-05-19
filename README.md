# Pokeneas de Antioquia

Una aplicación web que muestra información sobre Pokeneas (Pokémon nacidos en Antioquia, Colombia) con imágenes almacenadas en Amazon S3.

## Descripción

Este proyecto consiste en un servicio web desarrollado con Express.js que ofrece dos rutas principales:

1. `/api/pokenea` - Devuelve un JSON con información básica (id, nombre, altura, habilidad) de un Pokenea aleatorio y el ID del contenedor.
2. `/pokenea` - Muestra una página web con la imagen y una frase filosófica de un Pokenea aleatorio, junto con el ID del contenedor.

## Requisitos previos

- Node.js (v14 o superior)
- npm 
- Docker (para contenerización)
- Cuenta de AWS (para almacenamiento de imágenes en S3)

## Instalación

1. Clonar el repositorio:
   ```
   git clone https://github.com/tu-usuario/pokeneas-antioquia.git
   cd pokeneas-antioquia
   ```

2. Instalar dependencias:
   ```
   npm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```
   PORT=3000
   NODE_ENV=development
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   AWS_REGION=us-east-1
   ```

4. Iniciar la aplicación en modo desarrollo:
   ```
   npm run dev
   ```

## Uso con Docker

1. Construir la imagen Docker:
   ```
   docker build -t pokeneas-antioquia .
   ```

2. Ejecutar un contenedor:
   ```
   docker run -p 3000:3000 pokeneas-antioquia
   ```

3. Acceder a la aplicación en `http://localhost:3000`

## Despliegue en AWS con Docker Swarm

### Configuración de instancias

1. Crear 4 instancias EC2 en AWS con Docker instalado
2. En la instancia líder, iniciar Docker Swarm:
   ```
   docker swarm init --advertise-addr <IP-LÍDER>
   ```

3. Obtener el token para unirse como manager:
   ```
   docker swarm join-token manager
   ```

4. En las otras 3 instancias, unirse al clúster como managers usando el token obtenido

### Despliegue del servicio

En la instancia líder, ejecutar:

```
docker service create --name pokeneas-service --replicas 10 --publish 3000:3000 tu-usuario/pokeneas-antioquia
```

## Estructura del proyecto

```
pokeneas-antioquia/
├── src/
│   ├── controllers/
│   │   └── pokeneasController.js
│   │   
│   ├── models/
│   │   └── pokenea.js
│   │   
│   ├── routes/
│   │   └── pokeneasRoutes.js
│   │   
│   ├── views/
│   │   ├── index.ejs
│   │   ├── pokenea.ejs
│   │   ├── 404.ejs
│   │   └── error.ejs
│   │   
│   ├── app.js
│   └── index.js
│   
├── .dockerignore
├── .env
├── .gitignore
├── Dockerfile
├── package.json
└── README.md
```

## Licencia

ISC 