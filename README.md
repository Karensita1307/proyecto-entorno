# Entorno Multi-servicio en Contenedores con WSL2

Este proyecto despliega un entorno controlado de desarrollo utilizando **Docker Compose** sobre **WSL2 (Ubuntu)**.

## Servicios Incluidos
1. **Nginx (8080):** Servidor Web para contenido estático.
2. **Node.js Express API (3000):** Microservicio backend conectado a la base de datos.
3. **PostgreSQL (5432):** Motor de base de datos relacional con persistencia de volumen.
4. **pgAdmin 4 (5050):** Panel de administración web para la base de datos.
5. **Jupyter Lab (8888):** Entorno interactivo para analítica de datos.

## Cómo ejecutar el proyecto
1. Clonar el repositorio.
2. Crear un archivo `.env` basado en las variables del entorno requeridas.
3. Ejecutar `docker compose up -d`.

