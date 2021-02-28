import React, {useState} from 'react';
import './App.css';
import ToDoList from './ToDoList';

const App = () => {
  const [item, setItem] = useState("");
  const [displayItem, setDisplayItem] = useState([]);

  const inputEvent = (event) => {
    setItem(event.target.value);
  }
  const addToList = () => {
    setDisplayItem((oldItems) => {
      return [...oldItems, item];
    });
    setItem("");
  }

  const deleteItem = (id) => {
  
        // console.log("deleted");
        setDisplayItem((oldItems) => {
          return oldItems.filter((arrEle, index)=>{
            return index !== id;

          });
        });
  }
  const editItem = (id, editValue) => {
 if(editValue !== ""){
   setDisplayItem((oldItems)=> {
     oldItems[id] = editValue;
     return [...oldItems];
   });
   
 }
  
  }

  return (
    <div className = "main_div">
      <div className = "center-div">
        <br />
        <h1>ToDo List</h1>
        <br/>
        <textarea id = "task" type="text" placeholder="add items" onChange={inputEvent} value={item}/>
        <button id="btn" onClick={addToList}>+</button>

        <ol>
          {/* <li>{displayItem}</li> */}

          {displayItem.map( (itemVal, index) => {
            return <ToDoList
              key={index}
               id={index}
                itemVal={itemVal}
                onSelectDelete = {deleteItem}
                onSelectEdit = {editItem}
                />
            // return <li>{itemVal}</li>
          } )}
        </ol>
      </div>

    </div>

  );
}

export default App;
