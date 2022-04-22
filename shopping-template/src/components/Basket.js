import React from 'react'
import "./Basket.css"

const Basket = ({ cartItems, onAdd, onRemove }) => {

    const itemPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    // Tax Price is 14% of itemPrice
    const taxPrice = itemPrice * 0.14;
    // If itemPrice is greater than 12 bucks, free shipping; if not, 5 bucks
    const shippingPrice = itemPrice > 12 ? 0 : 5;
    const totalPrice = itemPrice + taxPrice + shippingPrice;

  return (
    <aside className="sidebar">
        <h2>Basket</h2>
        <div className="empty-cart">
        {/* If Cart is empty, display message */}
            {cartItems.length === 0 && <div>Cart is Empty</div>}
        </div>
        {/* Displaying Items on Basket */}
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
        {/* If cartitem is not empty, then render the following */}
        {cartItems.length !== 0 && (
            <div className="cart-sum">
                <hr></hr>
                <div className="summary">
                    <div>Items Price: ${itemPrice.toFixed(2)}</div>
                </div>
                <div className="summary">
                    <div>Tax Price: ${taxPrice.toFixed(2)}</div>
                </div>
                <div className="summary">
                    <div>Shipping Price: ${shippingPrice.toFixed(2)}</div>
                </div>
                <div className="summary">
                    <div><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</div>
                </div>
                <button onClick={()=>alert("Implement CheckOut")} className="check-out">Implement Check out</button>
            </div>

            
        )}
    </aside>
  )
}

export default Basket