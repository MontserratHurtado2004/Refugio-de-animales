import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")

db = client['RefugioAnimales']

animales_collection = db['Animales']
adoptantes_collection = db['Adoptantes']
adopciones_collection = db['Adopciones']
voluntarios_collection = db['Voluntarios']
donaciones_collection = db['Donaciones']
historial_medico_collection = db['HistorialMedico']
gastos_collection = db['Gastos']

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

animales_collection.insert_many(animales)

adoptantes = [
    {
        "nombre": "Tania Pérez",
        "telefono": "555-1234",
        "email": "Tania.perez@example.com",
        "direccion": "Calle Falsa 123",
        "fecha_solicitud": "2023-09-01"
    },
    {
        "nombre": "Angel García",
        "telefono": "555-5678",
        "email": "maria.garcia@example.com",
        "direccion": "Avenida Siempre Viva 456",
        "fecha_solicitud": "2023-08-15"
    },
    {
        "nombre": "Jose López",
        "telefono": "555-8765",
        "email": "Jose.lopez@example.com",
        "direccion": "Boulevard Los Olivos 789",
        "fecha_solicitud": "2023-07-20"
    }
]

adoptantes_collection.insert_many(adoptantes)

adopciones = [
    {
        "animal_id": animales_collection.find_one({"nombre": "Rocky"})["_id"],
        "adoptante_id": adoptantes_collection.find_one({"nombre": "Tania Pérez"})["_id"],
        "fecha_adopcion": "2023-09-05"
    },
    {
        "animal_id": animales_collection.find_one({"nombre": "Luna"})["_id"],
        "adoptante_id": adoptantes_collection.find_one({"nombre": "Angel García"})["_id"],
        "fecha_adopcion": "2023-08-20"
    }
]

adopciones_collection.insert_many(adopciones)

voluntarios = [
    {
        "nombre": "Marvin Martínez",
        "telefono": "555-4321",
        "email": "Marvin.martinez@example.com",
        "rol": "Cuidador"
    },
    {
        "nombre": "Luis Rodríguez",
        "telefono": "555-6543",
        "email": "luis.rodriguez@example.com",
        "rol": "Veterinario"
    },
    {
        "nombre": "Brandon Hernández",
        "telefono": "555-9876",
        "email": "brandon.hernandez@example.com",
        "rol": "Paseador"
    }
]

voluntarios_collection.insert_many(voluntarios)

donaciones = [
    {
        "donante": "Empresa Amiga S.A.",
        "monto": 1000.00,
        "fecha": "2023-09-10",
        "metodo_pago": "Transferencia"
    },
    {
        "donante": "Tania Pérez",
        "monto": 200.00,
        "fecha": "2023-08-25",
        "metodo_pago": "Efectivo"
    },
    {
        "donante": "Angel García",
        "monto": 150.00,
        "fecha": "2023-07-30",
        "metodo_pago": "Tarjeta"
    }
]

donaciones_collection.insert_many(donaciones)

historial_medico = [
    {
        "animal_id": animales_collection.find_one({"nombre": "Max"})["_id"],
        "fecha": "2023-02-01",
        "descripcion": "Vacunación anual",
        "veterinario": "Luis Rodríguez"
    },
    {
        "animal_id": animales_collection.find_one({"nombre": "Luna"})["_id"],
        "fecha": "2023-03-15",
        "descripcion": "Tratamiento para infección respiratoria",
        "veterinario": "Luis Rodríguez"
    },
    {
        "animal_id": animales_collection.find_one({"nombre": "Rocky"})["_id"],
        "fecha": "2023-01-25",
        "descripcion": "Chequeo general",
        "veterinario": "Luis Rodríguez"
    }
]

historial_medico_collection.insert_many(historial_medico)

gastos = [
    {
        "descripcion": "Compra de alimento para perros",
        "monto": 300.00,
        "fecha": "2023-09-05"
    },
    {
        "descripcion": "Pago de servicios veterinarios",
        "monto": 500.00,
        "fecha": "2023-08-10"
    },
    {
        "descripcion": "Compra de medicamentos",
        "monto": 200.00,
        "fecha": "2023-07-15"
    }
]

gastos_collection.insert_many(gastos)

###################################### Consultas ##########################################################

# animales
for animal in animales_collection.find():
    print(animal)

# adoptantes
for adoptante in adoptantes_collection.find():
    print(adoptante)

# adopciones
for adopcion in adopciones_collection.find():
    print(adopcion)

# voluntarios
for voluntario in voluntarios_collection.find():
    print(voluntario)

# donaciones
for donacion in donaciones_collection.find():
    print(donacion)

# historial médico
for historial in historial_medico_collection.find():
    print(historial)

# gastos
for gasto in gastos_collection.find():
    print(gasto)