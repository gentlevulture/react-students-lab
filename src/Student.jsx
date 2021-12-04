import React from 'react';

const Student = (props) => {
  return (
    <div className="student">
      <h2>{props.name}, {props.bio}</h2>
    </div>
  )
}

export default Student