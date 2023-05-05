import './App.css';
import React from 'react'

function App() {

  let itemResult = "" 

  const itemList = []


  const onTextChange = (event) => {
    itemResult = event.target.value
  }

  const submitValue = (event) => {
    // event.preventDefault() stops it from refreshing the page 
    event.preventDefault()
    itemList.push(itemResult)
    event.target.reset();
    console.log("result", itemList)
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
