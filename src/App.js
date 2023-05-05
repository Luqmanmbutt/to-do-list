import './App.css';
import React, { useState } from 'react'

function App() {

  let itemResult = "" 

  const [itemList, setItemList] = useState([])

  const onTextChange = (event) => {
    itemResult = event.target.value
    console.log("result",itemResult)
  }

  const submitValue = (event) => {
    event.preventDefault()
    setItemList(itemResult)
    
  }

  return (
    <div className='app-wrapper'>

      <div className="main-container">
        <form className="form-container"onSubmit={submitValue}>
          <input className="item-bar" type="text" onChange={onTextChange}></input>
          <button className="btn" >Add</button>
        </form>
        <ul>

          <li>
            {itemList}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
