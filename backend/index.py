from flask import Flask, request, jsonify
import pymongo

# Conexión a la base de datos MongoDB
try:
    client = pymongo.MongoClient("mongodb://localhost:27017/")
    db = client['RefugioAnimales']
    print(f'Conectado correcto a mongoose :)')
except pymongo.errors.ConnectionError as e:
    print(f"Error de conexión: {e}")
    exit()

# Colecciones
animales_collection = db['Animales']
adoptantes_collection = db['Adoptantes']
adopciones_collection = db['Adopciones']
voluntarios_collection = db['Voluntarios']
donaciones_collection = db['Donaciones']
historial_medico_collection = db['HistorialMedico']
gastos_collection = db['Gastos']

# Animales de ejemplo
animales = [
    {
        "nombre": "Max",
        "especie": "Perro",
        "raza": "Labrador",
        "edad": 3,
        "tamaño": "Grande",
        "estado": "Disponible",
        "fecha_rescate": "2023-01-15",
        "descripcion": "Muy amigable y juguetón",
        "foto_url": "http://example.com/max.jpg"
    },
    {
        "nombre": "Luna",
        "especie": "Gato",
        "raza": "Siamés",
        "edad": 2,
        "tamaño": "Pequeño",
        "estado": "En Tratamiento",
        "fecha_rescate": "2023-03-10",
        "descripcion": "Tímida pero cariñosa",
        "foto_url": "http://example.com/luna.jpg"
    },
    {
        "nombre": "Rocky",
        "especie": "Perro",
        "raza": "Bulldog",
        "edad": 5,
        "tamaño": "Mediano",
        "estado": "Adoptado",
        "fecha_rescate": "2022-11-20",
        "descripcion": "Tranquilo y obediente",
        "foto_url": "http://example.com/rocky.jpg"
    }
]

# Insertar animales en la base de datos (solo una vez)
animales_collection.insert_many(animales)

# Adoptantes de ejemplo
adoptantes = [
    {
        "nombre": "Juan Pérez",
        "telefono": "555-1234",
        "email": "juan.perez@example.com",
        "direccion": "Calle Falsa 123",
        "fecha_solicitud": "2023-09-01"
    },
    {
        "nombre": "María García",
        "telefono": "555-5678",
        "email": "maria.garcia@example.com",
        "direccion": "Avenida Siempre Viva 456",
        "fecha_solicitud": "2023-08-15"
    },
    {
        "nombre": "Carlos López",
        "telefono": "555-8765",
        "email": "carlos.lopez@example.com",
        "direccion": "Boulevard Los Olivos 789",
        "fecha_solicitud": "2023-07-20"
    }
]

# Insertar adoptantes en la base de datos (solo una vez)
adoptantes_collection.insert_many(adoptantes)

# Crear la aplicación Flask
app = Flask(__name__)

@app.route('/adoptantes', methods=['POST'])
def agregar_adoptante():
    data = request.json
    adoptantes_collection.insert_one(data)
    return jsonify({"mensaje": "Adoptante agregado exitosamente!"}), 201

@app.route('/adoptantes', methods=['GET'])
def obtener_adoptantes():
    adoptantes = list(adoptantes_collection.find({}, {'_id': 0}))  # Sin el campo _id
    return jsonify(adoptantes)

# Rutas y lógica para otros recursos (animales, adopciones, etc.)
@app.route('/animales', methods=['GET'])
def obtener_animales():
    animales = list(animales_collection.find({}, {'_id': 0}))  
    return jsonify(animales)

@app.route('/animales', methods=['POST'])
def agregar_animal():
    data = request.json
    animales_collection.insert_one(data)
    return jsonify({"mensaje": "Animal agregado"}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)
