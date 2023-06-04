

export default function Manche1Section({onClick}) {
  // State


  // Comportement

  //render
  return (
    <div>
      <div>
        <h1>Question 1</h1>
        
      </div>
      <p>La question est la !</p>
      <div>
        <button>Mauvaise Rep</button>
        <button onClick={onClick}>Bonne Rep</button>
        <button>Mauvaise Rep</button>
        <button>Mauvaise Rep</button>
      </div>
    </div>
  )
}