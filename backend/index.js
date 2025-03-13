const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs'); // Librería para encriptar contraseñas
const { obtenerAnimales, agregarAnimal, obtenerTodo } = require('./controladores/controlador');
const { crearUsuario } = require('./controladores/usuarios');

// Inicializar app
const app = express();
app.use(express.json());
app.use(cors()); // Habilitar CORS para todas las rutas

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/RefugioAnimales', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado correctamente a MongoDB :)'))
.catch((error) => {
    console.error('❌ Error de conexión:', error);
    process.exit(1);
});

// Definir esquema y modelo de animales
const animalSchema = new mongoose.Schema({
    nombre: String,
    especie: String,
    raza: String,
    edad: Number,
    tamaño: String,
    estado: String,
    fecha_rescate: String,
    descripcion: String,
    nombre_del_solicitante: String,
    telefono: String,
    email: String,
    direccion: String,
    fecha_solicitud: String
});

const Animal = mongoose.model('Animales', animalSchema);

// Datos de ejemplo
const animales = [
    {
        nombre: "Max",
        especie: "Perro",
        raza: "Labrador",
        edad: 3,
        tamaño: "Grande",
        estado: "Disponible",
        fecha_rescate: "2023-01-15",
        descripcion: "Muy amigable y juguetón",
        nombre_del_solicitante: "Juan Pérez",
        telefono: "555-1234",
        email: "juan.perez@example.com",
        direccion: "Calle Falsa 123",
        fecha_solicitud: "2023-09-01"
    }
];

// ✅ Insertar datos de ejemplo solo si la colección está vacía
async function insertarDatosEjemplo() {
    try {
        const count = await Animal.countDocuments({});
        if (count === 0) {
            await Animal.insertMany(animales);
            console.log("🐾 Datos de ejemplo insertados");
        } else {
            console.log("ℹ️ La colección ya tiene datos, no se insertaron duplicados.");
        }
    } catch (err) {
        console.error("❌ Error al insertar datos de ejemplo:", err);
    }
}

insertarDatosEjemplo(); // Llamada a la función

// Endpoints de animales
app.get('/animales', (req, res) => obtenerAnimales(Animal, req, res));
app.post('/animales', (req, res) => agregarAnimal(Animal, req, res));
app.get('/todo', (req, res) => obtenerTodo(Animal, req, res));

// Endpoints de usuarios
app.post('/user/create', crearUsuario); // Registro de usuarios

// Servidor
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
