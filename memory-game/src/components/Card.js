import React from 'react'
import "./Card.css";

const Card = ({ item, id, handleClick}) => {
  return (
    <div className="card" onClick={()=>handleClick(id)}> 
      <img src={item.image} alt="" />
    </div>
  )
}

export default Card