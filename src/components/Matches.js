import * as React from 'react';
import '../styles/matches.css'

export default function Matches(props) {
  console.log(props.status)
  return (
    <div>
      <h1 className='matches'>You have {props.sitters.length} Sitter matches!</h1>
      <button onClick={() => props.onClick()}>{props.status.displayData ? 'Hide matches' : 'Show matches!'}</button>
      <ul>
        {props.renderMatches()}
      </ul>
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

