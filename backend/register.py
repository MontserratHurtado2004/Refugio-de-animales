from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_cors import CORS  # Importa CORS
import os

# Inicialización de la aplicación Flask
app = Flask(__name__)

# Habilitar CORS para todas las rutas
CORS(app)

# Configuración de MongoDB
app.config['MONGO_URI'] = os.getenv('MONGO_URI', 'mongodb://localhost:27017/login')
mongo = PyMongo(app)
bcrypt = Bcrypt(app)

# Ruta para crear un usuario
@app.route('/user/create', methods=['POST'])
def create_user():
    try:
        # Obtener datos del formulario
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        role = data.get('rol', 'Client')

        # Validaciones básicas
        if not name or not email or not password:
            return jsonify({"msg": "Todos los campos son obligatorios"}), 400

        # Verificar si el usuario ya existe en MongoDB
        existing_user = mongo.db.users.find_one({"email": email})
        if existing_user:
            return jsonify({"msg": "El correo electrónico ya está registrado"}), 400

        # Encriptar la contraseña
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # Crear un nuevo usuario
        new_user = {
            "name": name,
            "email": email,
            "password": hashed_password,
            "role": role
        }

        # Insertar el nuevo usuario en MongoDB
        mongo.db.users.insert_one(new_user)

        return jsonify({"msg": "Usuario registrado exitosamente"}), 201

    except Exception as e:
        return jsonify({"msg": "Error al registrar el usuario", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=4000)
