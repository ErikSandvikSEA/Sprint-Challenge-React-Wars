import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



const Film = ({ filmFromPeopleData, filmsFromFilmsAPI }) => {
     
     const P = styled.p`
     &:hover {
          font-size: 1.4rem;
          transition: all .5s ease-in-out;
     };
     `
     
     const matchingFilm = filmsFromFilmsAPI.filter(filmFromFilmsAPI => {
         return filmFromFilmsAPI.url === filmFromPeopleData
     })
     // console.log(matchingFilm)
     return(
          <div>
               {
                <P>{matchingFilm[0].title}</P>
               }
          </div>
     )
}

export default Film