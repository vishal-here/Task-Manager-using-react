import "./App.css";
import React, { useState } from "react";
function App() {
  const [isPending, setIsPending] = useState(true);
  const [todos ,setTodos] = useState([]) ;
  const [title , setTitle] = useState("") ;
  const [description , setDescription] = useState("") ;
  const [deadline , setDeadline] = useState("") ;
  const [priority , setPriority] = useState("") ;
  
  const addTodo = ()=>{
    let newTodo = {
      titles : title ,
      descriptions : description ,
      deadlines : deadline ,
      priority : priority 
    }
    
    let newArray = [...todos] ;
    console.log(newArray)

    newArray.push(newTodo) ;
    setTodos(newArray) ;
    
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" , fontFamily: "Cursive" }}>Personal Task Manager</h1>
      <div className="todo-wrapper rounded shadow-sm">
        <div className="todo-input">
          <div className="todo-input-item">
            <div className="row">
              <div className="col-6">
                <label htmlFor="title" style={{ marginRight: "100px" }}>
                  
                  <h6> TITLE</h6>
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="title"
                  placeholder="What's the task title ?"
                  
                  onChange={(e)=> setTitle(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="todo-input-item">
            <div className="row">
              <div className="col-6">
                <label htmlFor="Description" style={{ marginRight: "50px" }}>
                  
                  <h6>DESCRIPTION</h6>
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="Description"
                  placeholder="What's the task description ?"
                  value={description}
                  onChange={(e)=> setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="todo-input-item">
            <div className="row">
              <div className="col-6">

     
  {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  What's the task Priority 
  </button> */}
  <label htmlFor="Priority" >
                  <h6>PRIORITY</h6>
                </label>
  


                {/* <label htmlFor="Priority" style={{ marginRight: "50px" }}>
                  
                  <h6>PRIORITY</h6>
                </label> */}
              </div>

              <div className="col-6">
                
              <select 
               id="Priority" 
               style={{width:"100%" , padding : "4px"}}
               onChange={(e)=> setPriority(e.target.value)}
               required>
      <option value="No Priority given ">What's the task Priority ?</option>
      <option value="HIGH">High</option>
      <option value="MEDIUM">Medium</option>
      <option value="LOW">Low</option>
      <option value="USELESS">Not Important</option>

  </select>

                {/* <input
                  type="text"
                  id="Priority"
                  placeholder="What's the task Priority ?"
                  value={priority}
                  onChange={(e)=> setPriority(e.target.value)}
                /> */}
              </div>
            </div>
          </div>
          <div className="todo-input-item">
            <div className="row">
              <div className="col-6">
                <label htmlFor="Deadline" >
                  <h6>DEADLINE</h6>
                </label>
              </div>
              <div className="col-6">
              <select
                id="Deadline" 
                style={{width:"100%" , padding : "4px"}}
                onChange={(e)=> setDeadline(e.target.value)}
                required>
      <option value="NO DEADLINE">What's the task Deadline ?</option>
      <option value="TODAY">Today</option>
      <option value="TOMORROW">Tomorrow</option>
      <option value="THIS WEEK">This Week</option>
      <option value="THIS MONTH">This Month</option>

  </select>
                {/* <input
                  type="text"
                  id="Deadline"
                  placeholder="What's the task Deadline ?"
                  value={deadline}
                  onChange={(e)=> setDeadline(e.target.value)}
                /> */}
              </div>
            </div>
          </div>
          <div className="todo-input-submit d-flex justify-content-around mt-3">
            <button className="btn btn-primary w-25"
            onClick={addTodo  }
            
            >Add</button>
          </div>
        </div>
      </div>

      <div
        className="shadow-lg mt-2 w-75 m-auto px-3"
        style={{ minHeight: "200px", paddingTop: "2px" }}
      >
        <div className="d-flex justify-content-around mt-5">
          <button
            onClick={() => {
              setIsPending(true);
              console.log(isPending);
            }}
            className={`card btn-area ${
              isPending == true && "active"
            } shadow-sm align-item-center text-primary  p-2`}
          >
            <h4>PENDING</h4>
          </button>
          <button
            onClick={() => {
              setIsPending(false);
              console.log(isPending);
            }}
            className={`card btn-area ${
              isPending == false && "active"
            } shadow-sm align-item-center text-primary  p-2`}
          >
            <h4>COMPLETED</h4>
          </button>
        </div>
        <div className=" row todo-list g-4">
        {

     

          todos.map((item,index)=>{
            return(
              <div className=" col-4" key={index}>
              <div className="card card-area rounded shadow-sm">
                <h3>{item.titles === "" ? "Untitled" : item.titles} </h3>
                <p>
                  <i>{item.descriptions === "" ? "No desriptions provided" : item.descriptions}</i>
                </p>
                <div className="d-flex justify-content-around">
                  <h6 className="bd-highlight">{item.priority}</h6>
                  <h6>{item.deadlines}</h6>
                </div>
                <div className="d-flex justify-content-around shadow-sm p-2">
                  <button type="button" className="btn btn-outline-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      ></path>
                    </svg>
                    Delete
                  </button>
                <button type="button" className="btn btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"></path>
                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"></path>
                  </svg>
                Completed
                </button>
                </div>
              </div>
            </div>
            )
          })
        }
     
         
        </div>
      </div>
    </div>
  );
}

export default App;
