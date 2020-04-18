import React from 'react'
import Film from './Film'





const Films = ({ films, filmsFromFilmsAPI }) => {

// console.log(filmsFromFilmsAPI)
     // Try to think through what state you'll need for this app before starting. Then build out
     // the state properties here.


     return (
          <div>
               {
                    films.map(eachFilm => {
                         return <Film key={eachFilm} filmFromPeopleData={eachFilm} 
                         filmsFromFilmsAPI={filmsFromFilmsAPI}/>
                    })

               }
          </div>
     )
}

export default Films;