import React from 'react'
import "./Card.css";

// Check status of Card


const Card = ({ item, id, handleClick}) => {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className={"card" + itemClass} onClick={()=>handleClick(id)}> 
      <img src={item.image} alt="" />
    </div>
  )
}

export default Card