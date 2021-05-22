import React, { useState } from "react";
import ListOfElements from '../component/ListOfElements'

export default function List() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]); //this is empaty array right now the value of intems is null

  const itemEvent = (e) => {
    setInputData(e.target.value);
  };
  const listOfItems = (e) => {
    e.preventDefault();
    setItems((olditems) => {
      return [...olditems, inputData]; //this is returning olditems as array and // inputData holding current data and then it sending in  items
    });
    setInputData("")
  };
  const deleteItems =(id) =>{
    // console.log("deleted"+ props.ind);
    setItems( (olditems)=>{
        return olditems.filter((arrElement,indexNum)=>{
          return indexNum!==id;
        })
    })
}
  return (
    
    <div className="main_div">
      <div className="con">
        <h1>
          This is <span className="big_text">ToDo</span> List{" "}
          <span className="small_text">Baby</span>
        </h1>
      </div>
      <div className="todo_app">
        <div className="todo_content">
          <form onSubmit={listOfItems}>
          <input
            type="text"
            placeholder="Add a new task"
            onChange={itemEvent}
            value={inputData}
          />
          {inputData.length == "" ? (
            <button onClick={listOfItems} disabled>
              +
            </button>
          ) : (
            <button onClick={listOfItems}>+</button>
          )} 
          </form>
          
          <ol>
            {items.sort().reverse().map((currentVal,index) => {              
                return (
                  <ListOfElements  key={index} id={index} val={currentVal} onSelect={deleteItems} name="manish"/>                  
                );
              })    
              }
          </ol>
        </div>
      </div>
    </div>
  );
}
