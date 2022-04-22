import React from 'react'
import "./Basket.css"

const Basket = ({ cartItems, onAdd, onRemove }) => {
  return (
    <aside className="sidebar">
        <h2>Basket</h2>
        <div className="empty-cart">
            {cartItems.length === 0 && <div>Cart is Empty</div>}
        </div>
        {cartItems.map((item) =>(
            <div key={item.id} className="items">
                <div>{item.name}</div>
                <div className="add-remove-btn">
                    <button onClick={()=>onAdd(item)} className="add">
                        +
                    </button>
                    <button onClick={()=>onRemove(item)} className="remove">
                        -
                    </button>
                </div>
                <div>
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
        ))}
    </aside>
  )
}

export default Basket