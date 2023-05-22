import json

def ajouter_question():
    # Demander à l'utilisateur d'entrer les détails de la question
    niveau = input("Entrez le niveau : ")
    matiere = input("Entrez la matière : ")
    question = input("Entrez la question : ")
    reponse_correcte = input("Entrez la réponse correcte : ")
    nb_mauvaises_reponses = int(input("Combien de mauvaises réponses voulez-vous ajouter (1-4) ? "))
    reponses_fausses = [input("Entrez une mauvaise réponse : ") for _ in range(nb_mauvaises_reponses)]

    # Charger le fichier JSON existant
    with open('questions.json', 'r') as f:
        data = json.load(f)

    # Créer la nouvelle question avec un ID unique
    nouvelle_question = {
        "id": data['total_questions'] + 1,
        "question": question,
        "reponse_correcte": reponse_correcte,
        "reponses_fausses": reponses_fausses
    }

    # Trouver le niveau et la matière correspondants et ajouter la question
    for n in data['niveaux']:
        if n['niveau'] == niveau:
            for m in n['matieres']:
                if m['matiere'] == matiere:
                    m['questions'].append(nouvelle_question)
                    n['nombre_questions'] += 1
                    data['total_questions'] += 1
                    break
            else:
                # Si la matière n'existe pas, la créer et ajouter la question
                n['matieres'].append({
                    "matiere": matiere,
                    "questions": [nouvelle_question]
                })
                n['nombre_questions'] += 1
                data['total_questions'] += 1
            break
    else:
        # Si le niveau n'existe pas, le créer, ajouter la matière et la question
        data['niveaux'].append({
            "niveau": niveau,
            "nombre_questions": 1,
            "matieres": [
                {
                    "matiere": matiere,
                    "questions": [nouvelle_question]
                }
            ]
        })
        data['total_questions'] += 1

    # Sauvegarder le fichier JSON
    with open('questions.json', 'w') as f:
        json.dump(data, f, indent=4)

def supprimer_question():
    # Demander à l'utilisateur d'entrer l'ID de la question à supprimer
    id_question = int(input("Entrez l'ID de la question à supprimer : "))

    # Charger le fichier JSON existant
    with open('questions.json', 'r') as f:
        data = json.load(f)

    # Trouver la question par son ID et la supprimer
    for n in data['niveaux']:
        for m in n['matieres']:
            for q in m['questions']:
                if q['id'] == id_question:
                    m['questions'].remove(q)
                    n['nombre_questions'] -= 1
                    data['total_questions'] -= 1
                    break

    # Mettre à jour les ID des questions restantes
    new_id = 1
    for n in data['niveaux']:
        for m in n['matieres']:
            for q in m['questions']:
                q['id'] = new_id
                new_id += 1

    # Sauvegarder le fichier JSON
    with open('questions.json', 'w') as f:
        json.dump(data, f, indent=4)

# Exemple d'utilisation
while True:
    action = input("Voulez-vous ajouter ou supprimer une question ? (ajouter/supprimer/quit) : ")
    if action.lower() == "ajouter":
        ajouter_question()
    elif action.lower() == "supprimer":
        supprimer_question()
    elif action.lower() == "quit":
        break
    else:
            print("Action non reconnue. Veuillez entrer 'ajouter', 'supprimer' ou 'quit'.")

                   
