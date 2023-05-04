import './App.css';
import React, { useState } from 'react'

function App() {
  
  const [itemList, setItemList] = useState([])



  const onTextChange = (event) => {
    
    const item = event.target.value
    setItemList(item)
    console.log("itemlist", itemList)
  } 

  const submitValue = (event) => {
    event.preventDefault()
    console.log("working submit", event)
    
  }
  return (
    <div className="main-container">
      <form onSubmit={submitValue}>
        <input className="item-bar" type="text" onChange={onTextChange}></input>
        <button className="btn">Add</button>
      </form>
      <ul>

        <li>
          {itemList}
        </li>
      </ul>
    </div>
  );
}

export default App;
