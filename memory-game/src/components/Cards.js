import React, { useState } from 'react'
import Card from './Card'
import "./Cards.css"


const Cards = ({ cards }) => {
    const [items, setItems] = useState([
    {id: 1,image: "https://www.khaosodenglish.com/wp-content/uploads/2019/08/AP19221404786377-696x541.jpg", stat: ""},
    {id: 1,image: "https://www.khaosodenglish.com/wp-content/uploads/2019/08/AP19221404786377-696x541.jpg", stat: ""},
    {id: 2,image: "https://images.unsplash.com/photo-1523586044048-b7d32d5da502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80", stat: ""},
    {id: 2,image: "https://images.unsplash.com/photo-1523586044048-b7d32d5da502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80", stat: ""},
    {id: 3,image: "https://images.unsplash.com/photo-1569462529461-9d84b52954d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", stat: ""},
    {id: 3,image: "https://images.unsplash.com/photo-1569462529461-9d84b52954d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", stat: ""},
    {id: 4,image: "https://images.unsplash.com/photo-1619203922058-7c42019fdd37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", stat: ""},
    {id: 4,image: "https://images.unsplash.com/photo-1619203922058-7c42019fdd37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", stat: ""},
    {id: 5,image: "https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", stat: ""},
    {id: 5,image: "https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", stat: ""},
    {id: 6,image: "https://images.unsplash.com/photo-1596376376140-b62b9468f081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", stat: ""},
    {id: 6,image: "https://images.unsplash.com/photo-1596376376140-b62b9468f081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", stat: ""},
    {id: 7,image: "https://images.unsplash.com/photo-1615798763618-183906cd14b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80", stat: ""},
    {id: 7,image: "https://images.unsplash.com/photo-1615798763618-183906cd14b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80", stat: ""},
    {id: 8,image: "https://images.unsplash.com/photo-1591575930710-f88ddf08a52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", stat: ""},
    {id: 8,image: "https://images.unsplash.com/photo-1591575930710-f88ddf08a52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", stat: ""},
    ].sort(()=> Math.random()-0.5));


    const [prev, setPrev] = useState(-1);

    const check = (current) =>{
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPrev(-1)
        } else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            // If wrong, then reverse the card back to initial state
            setTimeout(()=>{
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1);
            }, 500)
        }
    }
    const handleClick = (id) =>{
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        } else{
            check(id);
        }
    }
  return (
    <div className="card-container">
        {items.map((item, index) =>(
            <Card handleClick={handleClick} id={index} key={index} item={item}/>
        ))}
    </div>
  )
}

export default Cards