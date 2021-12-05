import React from 'react';
import Score from './Score';

const Student = (props) => {
  return (
    <div className="student">
      <h2>{props.name}, {props.bio}</h2>
      <h2>{props.scores.map((e, index) => {
          return(
            <Score
            date={e.date}
            score={e.score}
            />
          )
          })}
      </h2>
    </div>
  )
}
export default Student