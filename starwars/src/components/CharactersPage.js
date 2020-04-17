import React from 'react'
import Character from './Character'
import styled from 'styled-components'



const CharactersPage = ({ characters }) => {
     // set up state for your data
     return (
       <div className="characters-container">
         {
          characters.map(individualCharacter => {
            return <Character key={''} character={individualCharacter}/>
         })
       }
       </div>
     );
   };
   
   export default CharactersPage;