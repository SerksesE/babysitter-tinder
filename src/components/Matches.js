import * as React from 'react';
import '../styles/matches.css'
import { Link } from 'react-router-dom'

export default function Matches(props) {
  console.log(props.addFavorite)
  return (
    <div>
      <Link to={'/parentprofile'}><button>Profile page</button></Link>
      <div>
        <h1 className='matches'>You have {props.sitters.length} Sitter matches in {props.city}!</h1>
      </div>
      <div className='filtercontainer'>
        <div className='filter'>
          <div>
            <button onClick={() => props.toggleDisplay()}>{props.displayDataActive ? 'Hide matches' : 'Show matches!'}</button>
            <button onClick={() => props.renderCityAlkmaar()}>Alkmaar</button>
            <button onClick={() => props.renderCityRotterdam()}>Rotterdam</button>
            <button onClick={() => props.renderCityAmsterdam()}>Amsterdam</button>
            <button onClick={() => props.renderCityHaarlem()}>Haarlem</button>
            <button onClick={() => props.renderReset()}>Total</button>
          </div>
        </div>
        <div>
          <h2>How have {props.addFavorite.length} favorite sitters!</h2>
          <ul>
            {props.renderFavorites()}
          </ul>
        </div>

        <div className='result'>
          <ul>
            {props.displayDataActive && props.renderMatches()}
          </ul>
        </div>
      </div>
    </div>
  )
}

