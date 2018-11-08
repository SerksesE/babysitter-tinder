import * as React from 'react';
import '../styles/matches.css'

export default function Matches(props) {
  console.log(props.status)
  return (
    <div>
      <div>
        <h1 className='matches'>You have {props.sitters.length} Sitter matches in total!</h1>
      </div>

      <div className='filtercontainer'>


        <div className='filter'>

          <button onClick={() => props.renderReset()}>Reset search</button>
          <div>
            <button onClick={() => props.renderCityAlkmaar()}>Alkmaar</button>
            <button onClick={() => props.renderCityRotterdam()}>Rotterdam</button>
            <button onClick={() => props.renderCityAmsterdam()}>Amsterdam</button>
            <button onClick={() => props.renderCityLutjebroek()}>Lutjebroek</button>
          </div>
          <button onClick={() => props.displayData()}>{props.status.displayData ? 'Hide matches' : 'Show matches!'}</button>
        </div>

        <div className='result'>
          <ul>
            {props.renderMatches()}
          </ul>
        </div>
      </div>
    </div>
  )
}



    // <div>
    //   <button onClick={() => props.onClick()}>{props.status.displayData ? 'Hide matches' : 'Show matches!'}</button>
    //   <div className='sitterContainer'>
    //     <img alt='profile picture' />
    //     <div>
    //       {props.renderName()}
    //       {props.renderDescription()}
    //     </div>
    //   </div>
    // </div>

