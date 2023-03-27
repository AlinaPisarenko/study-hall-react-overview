import { useState } from 'react'
import CharacterCard from './CharacterCard';


export default function CharactersList({ characters, handleDelete, handleUpdate }) {


    const allCharacters = characters
    .map(char => <CharacterCard key={char.id} character={char} handleDelete={handleDelete} handleUpdate={handleUpdate} />)

  return (
    <div>
       {allCharacters}
    </div>
  )
}
