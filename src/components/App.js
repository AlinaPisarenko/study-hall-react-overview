import '../App.css';
import { useState, useEffect } from 'react'
import CharactersList from './CharactersList';
import NewCharacterForm from './NewCharacterForm';
import Filter from './Filter.js';

function App() {
 const [characters, setCharacters] = useState([])


useEffect(() => {
  fetch('/characters')
  .then(res => res.json())
  .then(data => setCharacters(data))
}, [])

const handleAddChar = (newObj) => {
  console.log(newObj)

  fetch('/characters', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newObj)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setCharacters([...characters, data])
  })
}

const handleDelete = (id) => {
console.log(id)

fetch('/characters', {
  method: "DELETE"
})

const updatedData = characters.filter(char => char.id !== id)
setCharacters(updatedData)
}

const handleUpdate = (id, isGood) => {

  fetch(`/characters/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({isGood: !isGood})
  })
  .then(res => res.json())
  .then(data => {
    const newArr = characters.map(char => {
      if (char.id === data.id) {
        return {...char, isGood: data.isGood}
      } else {
        return char
      }
    })

    setCharacters(newArr)
  })
}

  return (
    <div className="App">
        <img alt='logo' className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Monsters%2C_Inc._logo.svg/1280px-Monsters%2C_Inc._logo.svg.png'/>
        <NewCharacterForm handleAddChar={handleAddChar} />
        <Filter />
        <CharactersList characters={characters} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </div>
  );
}

export default App;
