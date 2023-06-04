import os
import json

# Dossier contenant les images
directory = "assets/images/drapeaux/"

# Liste pour stocker les informations de chaque pays
pays_list = []

# Parcourir tous les fichiers dans le dossier
for i, filename in enumerate(os.listdir(directory), start=1):
    # Vérifier que le fichier est une image .png
    if filename.endswith(".png"):
        # Enlever l'extension .png
        nom_du_pays = filename[:-4]
        # Convertir le nom du pays pour qu'il commence par une majuscule à chaque mot
        nom_du_pays = ' '.join([word.capitalize() for word in nom_du_pays.split('_')])
        # Ajouter les informations du pays à la liste
        pays_list.append({
            "id": i,
            "drapeau": directory + filename,
            "pays": nom_du_pays
        })

# Créer le dictionnaire final
result = {
    "nbDeDrapeaux": len(pays_list),
    "pays": pays_list
}

# Écrire le dictionnaire dans un fichier JSON
with open("pays.json", "w") as f:
    json.dump(result, f, ensure_ascii=False, indent=4)

