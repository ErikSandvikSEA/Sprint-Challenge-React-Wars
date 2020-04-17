import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const SWAPIUrl = 'https://swapi.py4e.com/api/'
const SWAPIPeopleUrl = 'people/'

const Films = ({ films }) => {
//      const Film = styled.p``

//      const [SWAPICharactersData, setSWAPICharactersData] = useState(null)
//   // Try to think through what state you'll need for this app before starting. Then build out
//   // the state properties here.

//   useEffect(() => {
//     axios.get(`${SWAPIUrl}${SWAPIPeopleUrl}`)
//       .then(response => {
//         // console.log('working')
//         setSWAPICharactersData(response.data)
//       })
//       .catch(err => {
//         console.log('error')
//       })
//     }, []
//   )
     return (
     <div>
          {/* {
               films.filter((film, index) => {
               if(SWAPICharactersData.results.films[index] === film.url){ 
               return <Film key={film.url} film={film.title}/>}
              })
            } */}
     </div>

     );
   }
   
   export default Films;