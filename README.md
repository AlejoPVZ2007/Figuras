# Figuras

Aplicación web desarrollada con Angular para gestionar figuras y series, con un backend en Node.js/Express que consume datos desde MySQL.

## Requisitos previos

Antes de abrir o ejecutar el proyecto necesitas tener instalado:

- Node.js 18 o superior
- npm
- MySQL
- Visual Studio Code (opcional, pero recomendado)

## Clonar y abrir el proyecto

1. Abre la carpeta del proyecto en VS Code.
2. En la terminal, dentro de la raíz del proyecto, instala las dependencias del frontend:

```bash
npm install
```

3. Si deseas ejecutar también el backend, abre otra terminal y entra a la carpeta backend:

```bash
cd backend
npm install
```

## Base de datos

1. Crea la base de datos en MySQL.
2. Importa el archivo `achivo.sql` que se encuentra en la raíz del proyecto.
3. Verifica que la configuración de conexión en `backend/index.js` coincida con tu usuario, contraseña y nombre de la base de datos:

```js
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysqladmin',
  database: 'Figuras'
});
```

Si tu MySQL usa otra contraseña o nombre, ajusta esos valores antes de iniciar el backend.

## Cómo abrir y ejecutar la aplicación

### Frontend (Angular)

Desde la raíz del proyecto:

```bash
npm start
```

Esto levantará el proyecto Angular y normalmente quedará disponible en:

```text
http://localhost:4200
```

### Backend (Express)

Desde la carpeta backend:

```bash
node index.js
```

El backend quedará disponible en:

```text
http://localhost:3000
```

## Verificar funcionamiento

- Frontend: abre la URL `http://localhost:4200`
- Backend: prueba la ruta `http://localhost:3000/figuras`
- Si la conexión a la base de datos falla, revisa la configuración en `backend/index.js`

## Estructura principal

```text
Figuras/
├── backend/
│   ├── index.js
│   └── package.json
├── src/
├── achivo.sql
├── angular.json
├── package.json
├── README.md
└── tsconfig.json
```

## Solución rápida si no inicia

Si aparece un error al correr la app:

```bash
npm install
```

Y luego, en el caso del backend:

```bash
cd backend
npm install
```

Si el frontend no abre, revisa que Angular CLI esté instalado correctamente con las dependencias del proyecto.

## Comandos útiles

```bash
npm run build
npm test
```

## Nota

Este proyecto está preparado para ejecutarse en local. Para trabajar en equipo o subirlo a un servidor, también debes configurar la base de datos y el backend en el entorno correspondiente.
