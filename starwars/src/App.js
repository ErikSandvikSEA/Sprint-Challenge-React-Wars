import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CharactersPage from './components/CharactersPage'
import './App.css';

const SWAPIUrl = 'https://swapi.py4e.com/api/people/'


const App = () => {
  const [SWAPICharactersData, setSWAPICharactersData] = useState(null)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    axios.get(`${SWAPIUrl}`)
      .then(response => {
        // console.log('working')
        setSWAPICharactersData(response.data)
      })
      .catch(err => {
        console.log('error')
      })
    }, []
  )
    console.log(SWAPICharactersData)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {
     SWAPICharactersData && <CharactersPage characters={SWAPICharactersData.results} />
      }
    </div>
  );
}

export default App;
