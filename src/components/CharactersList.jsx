import { useEffect, useState } from "react"
import Character from "./Character"

function CharacterList() {

    const [characters, setCharacters] = useState([])
  
    useEffect(()=> {
  
      async function fetchdata() {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        setCharacters(data.results)
      }
      fetchdata()
    }, [])

    return (
            <div className="row">
                {characters.map(character => {
                    return (
                        <div className="col-md-3 py-2" key={character.id}>
                            <Character character={character} />
                        </div>
                    )
            })}
            </div>
    )
}

export default CharacterList
