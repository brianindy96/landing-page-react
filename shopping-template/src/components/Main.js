import React from 'react'
import "./Main.css"
import Product from './Product'

const Main = ({ products, onAdd }) => {

  return (
    <main className="main-container">
        <h2>Products</h2>
        <div className="card-container">
            {products.map((product)=>(
                <Product onAdd={onAdd} key={product.id} product={product}/>
            ))}
        </div>
    </main>
  )
}

export default Main