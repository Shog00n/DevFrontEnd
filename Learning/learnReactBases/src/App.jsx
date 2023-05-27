import { useState } from "react";


function App() {
  // State (État, données)
    // Utilisation d'un hook ("useState") reconnaissable par "use"
    // Ici on l'initialise avec la valeur 1
    // "useState" retourne un tableau
    // On peut déconstruire ce tableau pour le mettre dans une variable
    // Et récupérer la valeur de l'initialisation en tant que premier Index (ici "compteur")
    // En deuxième index on y associe le setter qui est une fonction dédiée pour modifier la valeur du state associé
    // Par convention ce deuxième index prend le nom "set" + le nom du state (ici ça donne "setCompteur")
    // Pour le hook "useState(1)" il faut comprendre une chose useState définit un state (1) permet de l'initialiser
  const [compteur, setCompteur] = useState(1);

  // Comportements
    // Par convention ici on utilise handle suivis de son utilisation
  const handleClick = () => {
    // alert est une foction simple qui permet de vérifier si notre comportement est bien pluggé à l'utilisation qu'on en veut
    // alert("handleClick")
    // on peut aussi utiliser des console.log pour vérifier
    // Si on veut que notre comportement modifie un state on passe toujours par son setter
    // Quand on actualise notre state react rerender automatiquement l'element
    setCompteur(compteur + 1);
  }

  // Affichage (render)

  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick= {handleClick} >Incréments</button>
    </div>
  );
  
}


export default App;