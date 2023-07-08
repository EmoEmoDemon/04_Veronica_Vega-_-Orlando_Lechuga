import { CatchInfoCast } from '../components/CatchInfoCast'
import { CatchInfoEpisodes } from '../components/CatchInfoEpisodes'
import { CatchInfoSeries } from '../components/CatchInfoSeries'

export const MovieTemp = () => {
  return (
    <div className='series-page-container'>
          <div className='logo-container'>
        <img src="https://i.imgur.com/4SKRl96.png" />
      </div>
      <div className='series-info-container'>
        <CatchInfoSeries />
      </div>
      <div className='series-episodes-container'>
        <h1>Episodes</h1>
        <CatchInfoEpisodes />
      </div>
      <div className='series-cast-contaier'>
        <h1>Cast</h1>
        <CatchInfoCast />
      </div>
    </div>
  )
}
