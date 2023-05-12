import './App.css';
import React, { useState } from 'react'

function App() {


  const [list, setList] = useState([])
  const [itemList, setItemList] = useState("")

  const removeItem = (event) => {
    
    setItemList(list.pop())
    
    
    
  }


  const onTextChange = (event) => {
    setItemList(event.target.value)
    
  }

  const submitValue = (event) => {
    // event.preventDefault() stops it from refreshing the page 
    event.preventDefault()
// .length return the number of items in the array.
    if (itemList.length > 0) {
      /*let numbers = [0, 1, 2]
        add a new number to the array. in JS you use the method .push() (this is called in vanilla JS, you use the .push() method)
        IN REACT, we use the spread operator.
        [...list] -> will put all the items that are in the list array
        [...list, itemList] -> it will ALSO add infront of all the list items, the itemList items.
        const list = [0,1,2]
        const itemList = [{name: "hamza"}, 4]
        const newArray = [...list, itemList]
        const new Array if you log it will show = [0,1,2,{name:},4]
      */
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
              <div className="item-list">
              <input  value={item} type="checkbox" />
              <button className='delete-btn' onClick={removeItem}>

              </button>
              <span>{item}</span>
              </div>
              </>
            )
          })}

        </ul>
      </div>
    </div>
  );
}

export default App;
