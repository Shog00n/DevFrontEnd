import { useState } from "react"; 

export default function FruitForm({ handleAdd }) {
    // State
    const [nouveauFruit, setNouveauFruit] = useState("");
    // Comportement

    const handleSubmit = (event) => {
        // Ici event.preventDefault() enmpeche le rechargement de la page
        event.preventDefault();
        const id = new Date().getTime();
        const nom = nouveauFruit;
        const fruitAAjouter = {id, nom};
        
        handleAdd(fruitAAjouter);
        
        setNouveauFruit("");
    
    
        
    
        
      };
    
      const handleChange = (event) => {
        // const valueAfterChange = event.target.value;
        // console.log(valueAfterChange);
        // setNouveauFruit(valueAfterChange);
        setNouveauFruit(event.target.value);
        
    
      }

    //Render
    return (
        <form action="submit" onSubmit={handleSubmit}>
          <input value={nouveauFruit} type="text" placeholder="Ajouter un fruit..." onChange={handleChange}/>
          <button className="btnAdd">Ajouter +</button>
        </form>
    );

    
}