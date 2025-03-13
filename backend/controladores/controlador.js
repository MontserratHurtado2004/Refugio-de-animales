// Obtener todos los animales
const obtenerAnimales = async (Animal, req, res) => {
    try {
        const animales = await Animal.find({}, { _id: 0, __v: 0 }); // Buscar todos los animales en la base de datos, excluyendo _id y __v
        res.json(animales); // Enviar la lista de animales como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los animales', error }); // Enviar un mensaje de error si ocurre un problema
    }
};

// Agregar un nuevo animal
const agregarAnimal = async (Animal, req, res) => {
    try {
        const nuevoAnimal = new Animal(req.body); // Crear una nueva instancia de Animal con los datos del cuerpo de la solicitud
        await nuevoAnimal.save(); // Guardar el nuevo animal en la base de datos
        res.status(201).json({ mensaje: 'Animal agregado exitosamente!' }); // Enviar un mensaje de éxito
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al agregar el animal', error }); // Enviar un mensaje de error si ocurre un problema
    }
};

// Obtener todos los datos (igual a obtenerAnimales, puedes personalizar si quieres más info)
const obtenerTodo = async (Animal, req, res) => {
    try {
        const animales = await Animal.find({}, { _id: 0, __v: 0 }); // Buscar todos los animales en la base de datos, excluyendo _id y __v
        res.json(animales); // Enviar la lista de animales como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener todos los datos', error }); // Enviar un mensaje de error si ocurre un problema
    }
};

// Exportar las funciones para que puedan ser utilizadas en otros archivos
module.exports = {
    obtenerAnimales,
    agregarAnimal,
    obtenerTodo
};