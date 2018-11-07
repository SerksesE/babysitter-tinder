import * as React from 'react';
import '../styles/matches.css'

export default function Matches(props) {
  console.log(props.status)
  return (
    <div>
      <h1 className='matches'>You have {props.sitters.length} Sitter matches!</h1>
      <button onClick={() => props.onClick()}>Show matches!</button>
      <ul>
        {props.renderMatches()}
      </ul>
    </div>
  )
}




    // <div>
    //   <button onClick={props.displayData()}>Show Matches</button>
    //   <div className='sitterContainer'>
    //     <img alt='profile picture' />
    //     <h1>{props.sitters.name}, {props.sitters.age}</h1>
    //     <p>{props.sitters.description}</p>

    //   </div>
    // </div>
