from database.mongo import animales_collection, adoptantes_collection, adopciones_collection, voluntarios_collection, donaciones_collection, historial_medico_collection, gastos_collection

# Datos a insertar
animales = [
    {"nombre": "Max", "especie": "Perro", "raza": "Labrador", "edad": 3, "tamaño": "Grande", "estado": "Disponible", "fecha_rescate": "2023-01-15"},
    {"nombre": "Luna", "especie": "Gato", "raza": "Siamés", "edad": 2, "tamaño": "Pequeño", "estado": "En Tratamiento", "fecha_rescate": "2023-03-10"},
    {"nombre": "Rocky", "especie": "Perro", "raza": "Bulldog", "edad": 5, "tamaño": "Mediano", "estado": "Adoptado", "fecha_rescate": "2022-11-20"}
]

adoptantes = [
    {"nombre": "Tania Pérez", "telefono": "555-1234", "email": "tania.perez@example.com", "direccion": "Calle Falsa 123", "fecha_solicitud": "2023-09-01"},
    {"nombre": "Angel García", "telefono": "555-5678", "email": "angel.garcia@example.com", "direccion": "Avenida Siempre Viva 456", "fecha_solicitud": "2023-08-15"}
]

voluntarios = [
    {"nombre": "Marvin Martínez", "telefono": "555-4321", "email": "marvin.martinez@example.com", "rol": "Cuidador"},
    {"nombre": "Luis Rodríguez", "telefono": "555-6543", "email": "luis.rodriguez@example.com", "rol": "Veterinario"}
]

# Insertar en la base de datos
animales_collection.insert_many(animales)
adoptantes_collection.insert_many(adoptantes)
voluntarios_collection.insert_many(voluntarios)




print("✅ Datos insertados correctamente en MongoDB")
