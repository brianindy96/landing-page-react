import React from 'react'
import "./Product.css" 

const Product = ({ product, onAdd }) => {

  return (
    <div className="card">
        <div className="img-container">
            <img src={product.image} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <button onClick={()=>onAdd(product)}>Add</button>         
    </div>
  )
}

export default Product