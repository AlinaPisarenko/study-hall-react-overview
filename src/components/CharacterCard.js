

export default function CharacterCard({ character, handleDelete, handleUpdate }) {
// console.log(character)

const { id, name, image, isGood } = character
  return (
    <div className="CharacterCard">
      <h3>{name}</h3>
      <img src={image} alt='character'/>
      <button onClick={() => handleUpdate(id, isGood)}>{isGood ? "I'm good 😇" : "I'm bad 😈"}</button>
        <button onClick={() => handleDelete(id)} className="remove-btn">REMOVE</button>
    </div>
  )
}
