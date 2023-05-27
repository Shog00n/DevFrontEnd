import { useRef, useState } from "react";
import  Fruit  from "./components/Fruit"
import FruitForm from "./components/FruitForm";

function App() {
  //State
  const [fruits, setFruits] = useState([
    {id: 1, nom: "Abricot"},
    {id: 2, nom: "Banane"},
    {id: 3, nom: "Cerise"},
  ]);

  // Ici une deuxième hook qui lorsqu'il est appelé va créer un objet référence qu'on va stocker dans une variable que l'on va pouvoir associé à un élément d'affichage pour pouvoir le manipuler comme on veut note : useRef n'utilise pas le state donc il n'y a pas de rerender donc ce n'est pas une méthode utilisé pour ce genre de cas
  // const inputRef = useRef()

  

  //Comportement
  const handleClear = (id) => {
    // console.log(id);
    // 1 Copie du state
      // Pour ça on peut utiliser 2 techniques, la première c'est la fonction slice, qui fonctionne bien
      // const fruitsCopy = fruits.slice();
      // On peut sinon utiliser la manière plus courante en utilisant un spread opérator
    const fruitsCopy = [...fruits];

    // 2 Manipuler mon state
      // Ici on stock dans une variable la copie du tableau upgradé qui ne garde que les id différents de celui clické
    const fruitsCopyUpdate = fruitsCopy.filter(fruit => fruit.id !== id);

    // 3 Modifier mon state avec le setter
    setFruits(fruitsCopyUpdate);
  };

  const handleAdd = (fruitAAjouter) => {
    // 1 copie du state
    const fruitsCopy = [...fruits];

    // 2 manipulation sur la copie
    fruitsCopy.push(fruitAAjouter);

    // 3 modification du state avec le setter
    setFruits(fruitsCopy);
  }


  // Render

  return (
    <div>
      <h1>Liste de Fruits</h1>
        <ul>
          {fruits.map((fruit) => 
           
          <Fruit 
          fruitInfo = {fruit} 
          onClick = {() => handleClear(fruit.id)}
          symbol = "V"
          key={fruit.id} 
          />
          )}
        </ul>
        <FruitForm handleAdd = {handleAdd} />
        
    </div>
  );

}



export default App;

// Gestion de formulaire
// 1 création de formulaire
// 2 soumission du formulaire
// 3 collecte des données du formulaire