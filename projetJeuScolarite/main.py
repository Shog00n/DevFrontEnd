import psycopg2
from tkinter import *

# Connexion à la base de données
def connect_db():
    try:
        connection = psycopg2.connect(
            database="nom_base_de_donnees",
            user="utilisateur",
            password="mot_de_passe",
            host="hostname",
            port="port"
        )
        return connection
    except (Exception, psycopg2.Error) as error:
        print("Erreur lors de la connexion à PostgreSQL", error)

# Fonction pour ajouter une question
def add_question(niveau, matiere, texte_question, reponses):
    connection = connect_db()
    cursor = connection.cursor()

    # Insérer la question
    cursor.execute(
        """
        INSERT INTO Questions (texte_question, ID_matiere)
        VALUES (%s, (SELECT ID_matiere FROM Matieres WHERE nom_matiere=%s AND ID_niveau=(SELECT ID_niveau FROM Niveaux_Scolaires WHERE nom_niveau=%s)))
        RETURNING ID_question;
        """,
        (texte_question, matiere, niveau)
    )
    question_id = cursor.fetchone()[0]

    # Insérer les réponses
    for reponse in reponses:
        texte_reponse, est_correcte = reponse
        cursor.execute(
            """
            INSERT INTO Options_de_Reponse (ID_question, texte_option, est_correcte)
            VALUES (%s, %s, %s);
            """,
            (question_id, texte_reponse, est_correcte)
        )

    connection.commit()
    cursor.close()
    connection.close()

# Interface utilisateur
def gui():
    window = Tk()
    window.title("Gestionnaire de Questions")

    Label(window, text="Niveau:").grid(row=0, column=0)
    niveau_entry = Entry(window)
    niveau_entry.grid(row=0, column=1)

    Label(window, text="Matière:").grid(row=1, column=0)
    matiere_entry = Entry(window)
    matiere_entry.grid(row=1, column=1)

    Label(window, text="Question:").grid(row=2, column=0)
    question_entry = Entry(window)
    question_entry.grid(row=2, column=1)

    # Pour simplifier, supposons que nous avons toujours 4 réponses possibles
    reponses_entries = []
    for i in range(4):
        Label(window, text=f"Réponse {i + 1}:").grid(row=3 + i, column=0)
        reponse_entry = Entry(window)
        reponse_entry.grid(row=3 + i, column=1)
        reponses_entries.append(reponse_entry)

    def on_submit():
        niveau = niveau_entry.get()
        matiere = matiere_entry.get()
        texte_question = question_entry.get()
        reponses = [(reponse_entry.get(), False) for reponse_entry in reponses_entries]  # Supposons que toutes les réponses sont incorrectes pour simplifier
        add_question(niveau, matiere, texte_question, reponses)

    Button(window, text="Soumettre", command=on_submit).grid(row=7, columnspan=2)

    window.mainloop()

if __name__ == "__main__":
    gui()
