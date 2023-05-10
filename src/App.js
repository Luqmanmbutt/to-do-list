import './App.css';
import React, { useState } from 'react'

function App() {


  const [list, setList] = useState([])
  const [itemList, setItemList] = useState("")

  const onTextChange = (event) => {
    setItemList(event.target.value)
  }

  const submitValue = (event) => {
    // event.preventDefault() stops it from refreshing the page 
    event.preventDefault()

    if (itemList !== "") {

      setList([...list, itemList]);

      setItemList('')

    }
    event.target.reset();
  }


  return (
    <div className='app-wrapper'>
      <div className='title'>ToDo List </div>
      <div className="main-container">
        <form className="form-container" onSubmit={submitValue}>
          <input className="item-bar" type="text" value={itemList} onChange={onTextChange}></input>
          <button className="btn" >Add</button>
        </form>
        <ul>
          {list.map(item => {
            return (
              <>
                <li className='list'>
                  {item}

                </li>
              </>
            )
          })}

        </ul>
      </div>
    </div>
  );
}

export default App;
