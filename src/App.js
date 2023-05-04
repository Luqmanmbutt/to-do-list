import './App.css';
import React, { useState } from 'react'

function App() {
  
  const [itemList, setItemList] = useState([])



  const onTextChange = (event) => {
    console.log("function is qworking", event.target.value)
  } 

  const submitValue = (event) => {
    event.preventDefault()
    console.log("working submit")
  }
  
  return (
    <div className="main-container">
      <form onSubmit={submitValue}>
        <input className="item-bar" type="text" onChange={onTextChange}></input>
        <button className="btn">Add</button>
      </form>
    </div>
  );
}

export default App;
