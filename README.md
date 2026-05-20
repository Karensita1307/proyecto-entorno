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

# Actividad a desarrollar

# Entorno Controlado de Microservicios Basado en Contenedores (WSL2 & Docker)

## 1. Descripción del Proyecto
Este proyecto consiste en el diseño, despliegue y administración de un entorno controlado multi-servicio ejecutado de manera nativa sobre un Kernel Linux real en Windows gracias a **WSL2 (Windows Subsystem for Linux)**. 

Haciendo uso de **Docker** y **Docker Compose**, se ha estructurado una arquitectura aislada compuesta por cinco servicios independientes (procesos de usuario protegidos) que interactúan entre sí. Este enfoque emula un entorno de desarrollo profesional y de producción moderno, eliminando el clásico problema de *"en mi máquina sí funciona"*.

---

## 2. Arquitectura del Entorno y Conceptos de Sistemas Operativos

Desde la perspectiva de la teoría de Sistemas Operativos (siguiendo los principios de Andrew S. Tanenbaum), los servicios no se ejecutan en máquinas virtuales pesadas con hardware emulado. En su lugar, corren como **procesos aislados dentro del Kernel de Linux**, compartiendo sus recursos de forma ultraeficiente a través de dos mecanismos clave:
* **Namespaces (Espacios de Nombres):** Aíslan la red, los usuarios y los discos de cada contenedor para que crean que son dueños absolutos del sistema.
* **Cgroups (Grupos de Control):** Limitan el uso de CPU y memoria RAM para garantizar que ningún proceso monopolice el hardware.

### Redes de Comunicación y Aislamiento Técnico
Para proteger la integridad de los datos, el entorno cuenta con dos redes virtuales internas tipo `bridge` (puente):
1.  **`red-backend`:** Conecta el servidor web (Nginx), la API (Node.js) y el entorno de ciencia de datos (Jupyter Lab).
2.  **`red-database`:** Conecta de forma privada la API (Node.js), el motor de base de datos (PostgreSQL) y el administrador visual (pgAdmin 4).

**Nota de Seguridad:** El servidor web `web-server` no pertenece a la red de datos. Si un agente malicioso vulnera el servidor web externo, el Sistema Operativo bloquea cualquier comunicación directa de este hacia el motor de la base de datos por falta de direccionamiento de red.

---

## 3. Requisitos Previos

Antes de desplegar la infraestructura, asegúrese de tener configurados los siguientes componentes de software en el sistema anfitrión de Windows:

* **WSL2:** Subsistema de Windows para Linux (Versión 2 basada en hipervisor).
* **Distribución Linux:** Ubuntu 20.04 LTS o superior instalado en WSL2.
* **Docker Desktop:** Configurado con el motor basado en WSL2 activado.
* **Git:** Sistema de control de versiones instalado en la terminal de Ubuntu.

---

## 4. Estructura de Archivos Recomendada

El proyecto debe mantener la siguiente jerarquía de directorios en el espacio de usuario de Linux para evitar colisiones de rutas:

```text
proyecto-entorno/
├── docker-compose.yml
├── .env
├── .gitignore
├── jupyter/
├── nginx/
│   ├── Dockerfile
│   └── html/
│       └── index.html
├── node-app/
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
└── postgres/


