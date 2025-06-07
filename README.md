

Este proyecto es una **aplicación web desarrollada en React** con enrutamiento, gráficos interactivos, geolocalización y navegación integrada, enfocada en el monitoreo y la seguridad del entorno agrícola.

---

## 📌 Descripción general

La aplicación incluye:

- Un panel de inicio (Dashboard) con gráficos de datos por día (usando `Recharts`).
- Enrutamiento dinámico entre páginas como Login, Registro, Calendario, Foro y Módulo IA.
- Un botón de pánico con temporizador visual y ubicación del usuario.
- Navegación inferior con íconos intuitivos (cámara, foro, calendario, etc.).

---

## 🚀 Tecnologías utilizadas

### 🧩 Frontend (React)

- **React Router DOM** – Navegación entre rutas
- **Recharts** – Gráficos de pastel interactivos
- **Font Awesome** – Íconos visuales para botones y navegación
- **Geolocation API** – Detección de ubicación del usuario
- **useState & useEffect** – Manejo de estado y lógica del botón de pánico

---

## 📦 Instalación de dependencias

Asegúrate de estar dentro de la carpeta `/frontend` y ejecuta:

npm install react-router-dom recharts @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
🗺️ Rutas implementadas (App.js)
jsx

<Route path="/" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/RecoverPassword" element={<RecoverPassword />} />
<Route path="/ResetPassword" element={<ResetPassword />} />
<Route path="/home" element={<Home />} />
<Route path="/calendario" element={<Calendario />} />
<Route path="/camaraIA" element={<CamaraIA />} />
<Route path="/foro" element={<Foro />} />
📊 Funcionalidades del componente Home
📍 Geolocalización automática al ingresar

🔘 Botón de pánico con cuenta regresiva (10s)

📈 Gráfico circular de datos (1-30 días)

📱 Navegación flotante con iconos

🎨 Estilizado con CSS externo (Home.css)

📁 Estructura recomendada
go

frontend/
├── componentes/
│   ├── App.js
│   ├── Home.js
│   ├── Login.js
│   ├── Register.js
│   ├── CamaraIA.js
│   └── ...
├── estilos/
│   └── Home.css
├── index.js
└── package.json
✅ Cómo ejecutar

npm start
Abre en: http://localhost:3000

👩‍💻 Desarrollado por
Fátima Montserrat Hurtado Carmona
📧 montserrathurtado2004@gmail.com
🔗 GitHub
