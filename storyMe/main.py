import json

def add_story():
    # Charger les données existantes
    with open('stories.json', 'r') as file:
        data = json.load(file)

    # Demander à l'utilisateur les détails de la nouvelle histoire
    storyId = data['numberOfStories'] + 1
    storyName = input("Entrez le nom de l'histoire : ")
    storyImageFileName = input('Entrez le nom du fichier image (jpeg) : ')
    storyImage = f"/assets/images/imgStory/{storyImageFileName}.jpg"
    story = input("Entrez le contenu de l'histoire : ")

    # Créer la nouvelle histoire
    new_story = {
        "storyId": storyId,
        "storyName": storyName,
        "storyImage": storyImage,
        "story": story
    }

    # Ajouter la nouvelle histoire aux données existantes
    data['stories'].append(new_story)

    # Incrémenter le nombre d'histoires
    data['numberOfStories'] += 1

    # Sauvegarder les données
    with open('stories.json', 'w') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

def delete_story():
    # Charger les données existantes
    try:
        with open('stories.json', 'r') as file:
            data = json.load(file)
    except FileNotFoundError:
        print("Fichier 'stories.json' non trouvé.")
        return
    except json.JSONDecodeError:
        print("Erreur lors de la lecture du fichier 'stories.json'.")
        return

    storyId = input("Veuillez entrer l'ID de l'histoire à supprimer, ou laissez vide pour chercher par nom : ")
    
    # Recherche par ID
    if storyId:
        for story in data['stories']:
            if story['storyId'] == int(storyId):
                data['stories'].remove(story)
                data['numberOfStories'] -= 1
                break
        else:
            print("Aucune histoire avec cet ID n'a été trouvée.")
            return
    # Recherche par nom
    else:
        storyName = input("Veuillez entrer le nom de l'histoire à supprimer : ")
        for story in data['stories']:
            if story['storyName'] == storyName:
                data['stories'].remove(story)
                data['numberOfStories'] -= 1
                break
        else:
            print("Aucune histoire avec ce nom n'a été trouvée.")
            return
    
    for i, story in enumerate(data['stories']):
            story['storyId'] = i + 1  # IDs start from 1

    data['numberOfStories'] = len(data['stories'])

    # Sauvegarder les données
    try:
        with open('stories.json', 'w') as file:
            json.dump(data, file, ensure_ascii=False, indent=4)
    except IOError:
        print("Erreur lors de l'écriture dans le fichier 'stories.json'.")


def main():
    while True:
        print("\n---- Menu ----")
        print("1. Ajouter une histoire")
        print("2. Supprimer une histoire")
        print("3. Quitter")
        choice = input("Choisissez une option: ")

        if choice == '1':
            add_story()
        elif choice == '2':
            delete_story()
        elif choice == '3':
            print("Arrêt du programme.")
            break
        else:
            print("Choix invalide, veuillez réessayer.")

if __name__ == "__main__":
    main()