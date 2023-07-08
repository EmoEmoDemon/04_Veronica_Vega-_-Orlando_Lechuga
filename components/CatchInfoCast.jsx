import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const CatchInfoCast = () => {
  const [data, setData] = useState([])
  const location = useLocation()
  const serieId = location.pathname.split('/')[2]

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${serieId}/cast`)
      .then((response) => {
        return response.json()
      }).then((serieInf) => {
        console.log(serieInf)
        setData(serieInf)
      }).catch((error) => {
        console.error(error)
      })
  }, [serieId])

  const divideIntoColumns = (arr, columns) => {
    const dividedArr = []
    const itemsPerColumn = Math.ceil(arr.length / columns)

    for (let i = 0; i < columns; i++) {
      const start = i * itemsPerColumn
      const end = start + itemsPerColumn
      dividedArr.push(arr.slice(start, end))
    }

    return dividedArr
  }

  const dividedData = divideIntoColumns(data, 3)

  return (
    <div style={{ display: 'flex' }}>
      {dividedData.map((column, index) => (
        <div key={index} style={{ flex: 1 }}>
          {column.map((actor) => (
            <div key={actor.person.id}>
              <img src={actor.person.image && actor.person.image.medium} alt={actor.person.name} />
              <div>
                <p className="actor-name">{actor.person.name || 'Loading...'}</p>
                <p className="character-name">Character: {actor.character.name || 'Loading...'}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
