const bcrypt = require('bcrypt'); // Importando bcrypt para encriptar contraseñas

// Crear usuario
const crearUsuario = async (User, req, res) => {
    try {
        const { name, email, password, role = 'Client' } = req.body; // Extrayendo datos del cuerpo de la solicitud

        // Validación básica de campos
        if (!name || !email || !password) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios" }); // Enviar mensaje de error si faltan campos
        }

        // Verificar si el correo ya está registrado
        const usuarioExistente = await User.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ msg: "El correo electrónico ya está registrado" }); // Enviar mensaje de error si el correo ya está registrado
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10); // Encriptar la contraseña con bcrypt

        // Crear objeto usuario
        const nuevoUsuario = new User({
            name,
            email,
            password: hashedPassword, // Guardar la contraseña encriptada
            role
        });

        // Guardar usuario en la base de datos
        await nuevoUsuario.save(); // Guardar el nuevo usuario en la base de datos

        return res.status(201).json({ msg: "Usuario registrado exitosamente" }); // Enviar mensaje de éxito

    } catch (error) {
        console.error('Error al crear usuario:', error); // Mostrar el error en la consola
        return res.status(500).json({ msg: "Error al registrar el usuario", error: error.message }); // Enviar mensaje de error
    }
};

module.exports = {
    crearUsuario // Exportar la función crearUsuario para que pueda ser utilizada en otros archivos
};