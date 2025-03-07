import pymongo
import os
from dotenv import load_dotenv

# Cargar variables de entorno desde .env
load_dotenv()

# Conexión a MongoDB
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
client = pymongo.MongoClient(MONGO_URI)
db = client['RefugioAnimales']

# Colecciones
animales_collection = db['Animales']
adoptantes_collection = db['Adoptantes']
adopciones_collection = db['Adopciones']
voluntarios_collection = db['Voluntarios']
donaciones_collection = db['Donaciones']
historial_medico_collection = db['HistorialMedico']
gastos_collection = db['Gastos']

print("📌 Conexión a MongoDB establecida correctamente")
