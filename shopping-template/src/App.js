import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import data from "./components/data";
import { useState } from "react"

function App() {
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) =>{
      // define Exist. if product already exist or not
      const exist = cartItems.find(item => item.id === product.id)
      // If Product exists then add the product to the already existed and adds qty + 1
      if(exist){
        // setCartItems = changing new State 
        // cartItems.map() loops through the cartItems
        // If item.id === product.id, then add qty to existing qty, don't touch it
        setCartItems(cartItems.map(item => item.id === product.id ? {...exist, qty: exist.qty + 1} : item))
      } else{
        // If doesn't exist, set qty as 1
        setCartItems([...cartItems, {...product, qty:1 }]);
      }
    };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Main onAdd={onAdd} products={products} />
        <Basket onAdd={onAdd} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
