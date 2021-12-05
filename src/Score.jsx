import React from 'react';

const Score = (props) => {
  console.log(props)
  return (
    <div className="scores">
      <h2>{props.date}, {props.score}</h2>
    </div>
  )
}

export default Score