import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'

export const CatchMov = ({ show }) => {
  const showId = show.id

  return (
    <div className="CatchMov">
      <Link to={`/series/${showId}`} className="CatchMov-link">
        <div>{show.image && <img src={show.image.medium} alt={show.name} className="CatchMov-image" />}</div>
        <div>
          <h2 className="CatchMov-title">{show.name}</h2>
          <p className="CatchMov-external">{show.externals.thetbdb}</p>
        </div>
      </Link>
    </div>
  )
}
