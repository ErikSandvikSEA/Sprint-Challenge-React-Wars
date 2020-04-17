import React from 'react'
import Character from './Character'
import styled from 'styled-components'



const CharactersPage = ({ characters }) => {

     console.log(characters)
     // set up state for your data
     return (
       <div className="characters-container">
         {
          characters.map(individualCharacter => {
            return <Character key={individualCharacter.name} character={individualCharacter}/>
         })
       }
       </div>
     );
   };
   
   export default CharactersPage;