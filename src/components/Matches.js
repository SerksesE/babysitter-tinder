import * as React from 'react';

export default function Matches(props) {
  console.log(props.sitters)
  return (
    <div>
      <h1>Sitter matches!</h1>
      <button onClick={() => props.onClick()}>Find my matches!</button>
      <ul>
        {props.sitters && props.sitters.map(sitter =>
          <li key={sitter.id}>Name: {sitter.name}
            Age: {sitter.age}
            
            Fee: {sitter.feeInEuros}</li>)}
      </ul>
    </div>
  )
}


