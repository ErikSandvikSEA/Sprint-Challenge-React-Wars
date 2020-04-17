// Write your Character component here
import React, { useEffect, useState } from 'react'
import Films from './Films'
import axios from 'axios'
import styled from 'styled-components'

const SWAPIUrl = 'https://swapi.py4e.com/api/'
const SWAPIFilmsUrl = 'films/'

const Character = ({ character }) => {



     const Container = styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgb(210, 210, 210);
          border-radius: 5px;
          box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
          margin: 8px;
          padding: 12px;
          background-color: white;
          width: 50%;
          background-image: url('https://cdn.spacetelescope.org/archives/images/screen/heic1909a.jpg');

          a {
          color: green;

          &:hover {
               color: red;
               transition: all 1s ease-in-out;
          }
          };

          `
     const InfoWrapper = styled.div`
          border: 1.2px solid yellow;
          box-shadow: 2px 5px 10px -2px rgb(828, 827, 197);
          margin: 2% 0;
          width: 50%;
          color: ${props => props.textColor ? props.textColor : 'inherit'};
          &:hover {
               color: red;
               transition: all 1s ease-in-out;
          }
          span.hidden {
               display: none
          }

     `



     const [SWAPIFilmsData, setSWAPIFilmsData] = useState(null)
     useEffect(() => {
          axios.get(`${SWAPIUrl}${SWAPIFilmsUrl}`)
               .then(response => {
                    //     console.log('working')
                    setSWAPIFilmsData(response.data.results)
               })
               .catch(err => {
                    console.log('error')
               })
     }, []
     )

     const [movieShow, setMovieShow] = useState(false)

     const clickHandler = e => {
          setMovieShow(!movieShow)
     }

     return (
          <Container>
               <InfoWrapper textColor='yellow'>
                    Name: {character.name}
               </InfoWrapper>
               <InfoWrapper textColor='yellow'>
                    Birth Year: {character.birth_year}
               </InfoWrapper>
               <InfoWrapper textColor='yellow'>
                    <button onClick={clickHandler}>
                         <h1 textColor='yellow'>Films</h1>
                    </button>
                    {
                         movieShow ? 
                         (
                              <span>
                                   {
                                       SWAPIFilmsData && <Films films={character.films} filmsFromFilmsAPI={SWAPIFilmsData} />
                                   }
                              </span>
                         ) : (null)
                    }
               </InfoWrapper>
               {/* <Character /> */}
          </Container>


     );
}

export default Character;