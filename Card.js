import React from 'react';
import './Card.scss'

function Card({ title, clickHandler }) {
  return (
    <>
      <div className="card text-bg-primary card-style" style={{ cursor: 'pointer' }} onClick={clickHandler}>
        <div className="card-body text-center">
          <h5 className="card-title display-4">{title}</h5>
        </div>
      </div>
    </>
  )
}

export default Card;