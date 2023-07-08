import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'

export const CatchMov = ({ show }) => {
  const showId = show.id

  return (
    <div className="CatchMov">
      <Link to={`/series/${showId}`} className="CatchMov__link">
        <div>{show.image && <img src={show.image.medium} alt={show.name} className="CatchMov__image" />}</div>
        <div>
          <h2 className="CatchMov__title">{show.name}</h2>
          <p className="CatchMov__external">{show.externals.thetbdb}</p>
        </div>
      </Link>
    </div>
  )
}
