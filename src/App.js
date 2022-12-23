import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [isPending, setIsPending] = useState(true);
  const [completedTaskArray, setCompletedTaskArray] = useState([]);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");
  const [addStatus, setAddStatus] = useState(false);

  const addTodo = () => {
    let newTodo = {
      titles: title,
      descriptions: description,
      deadlines: deadline,
      priority: priority,
    };

    let newArray = [...todos];
    newArray.push(newTodo);
    setTodos(newArray);
    localStorage.setItem("todo-item", JSON.stringify(newArray));
    console.log(newArray);
  };

  const handleDelete = (index) => {
    let oldArray = [...todos];
    oldArray.splice(index, 1);
    localStorage.setItem("todo-item", JSON.stringify(oldArray));
    setTodos(oldArray);
    console.log(oldArray);

  };
  const handleComplete = (index) =>{
    let now = new Date() ;
    let dd = now.getDate() ;
    let mm = now.getMonth() ;
    let yy = now.getFullYear() ;
    let h = now.getHours() ;
    let m = now.getMinutes() ;
    let completionTime = dd + '/'+mm + '/'+yy + " at " + h +":"+ m ;

    let newCompletedTask = {
      ...todos[index] ,
      completedAt : completionTime 
    }
    completedTaskArray.push(newCompletedTask) ;
    setCompletedTaskArray(completedTaskArray) ;
    localStorage.setItem('completed-todos' , JSON.stringify(completedTaskArray))
    handleDelete(index) ;
  }

 const  handleDeleteCompleted = (index)=>{
  let oldArray = [...completedTaskArray] ;
  oldArray.splice(index,1) ;
  localStorage.setItem('completed-todos',JSON.stringify(oldArray))
  setCompletedTaskArray(oldArray) ;
 }
  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todo-item"));
    if(savedTodo) setTodos(savedTodo);

    let savedCompletedTodos = JSON.parse(localStorage.getItem('completed-todos')) ;
    if(savedCompletedTodos) setCompletedTaskArray(savedCompletedTodos) ;
  }, []);
  return (
    <div className="App rounded shadow p-3">
      <h1 style={{ textAlign: "center", fontFamily: "Cursive" , marginTop : "20px", marginBottom : "20px" }}>
        Personal Task Manager
      </h1>
      <div className="todo-wrapper rounded shadow-sm">
        <div className="todo-input">
          <div className="todo-input-item">
            <div className="row ">
              <div className="col-6 ">
                <label htmlFor="title" >
                  <h6 className="bd-highlight todo-fields"> TITLE</h6>
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="title"
                  placeholder="What's the task title ?"
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setAddStatus(true);
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="todo-input-item">
            <div className="row">
              <div className="col-6">
                <label htmlFor="Description" >
                  <h6 className="bd-highlight todo-fields">DESCRIPTION</h6>
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="Description"
                  placeholder="What's the task description ?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="todo-input-item">
            <div className="row">
              <div className="col-6">
                <label htmlFor="Priority">
                  <h6 className="bd-highlight todo-fields">PRIORITY</h6>
                </label>
              </div>

              <div className="col-6">
                <select
                  id="Priority"
                  style={{ width: "100%", padding: "4px" }}
                  onChange={(e) => setPriority(e.target.value)}
                  required
                >
                  <option value="No Priority given ">
                    What's the task Priority ?
                  </option>
                  <option value="HIGH">High</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="LOW">Low</option>
                  <option value="USELESS">Not Important</option>
                </select>
              </div>
            </div>
          </div>
          <div className="todo-input-item">
            <div className="row">
              <div className="col-6">
                <label htmlFor="Deadline">
                  <h6 className="bd-highlight todo-fields">DEADLINE</h6>
                </label>
              </div>
              <div className="col-6">
                <select
                  id="Deadline"
                  style={{ width: "100%", padding: "4px" }}
                  onChange={(e) => setDeadline(e.target.value)}
                  required
                >
                  <option value="NO DEADLINE">
                    What's the task Deadline ?
                  </option>
                  <option value="TODAY">Today</option>
                  <option value="TOMORROW">Tomorrow</option>
                  <option value="THIS WEEK">This Week</option>
                  <option value="THIS MONTH">This Month</option>
                </select>
              </div>
            </div>
          </div>
          <div className="todo-input-submit d-flex justify-content-around mt-3">
            <button
              className={`btn btn-primary ${addStatus === false && "disabled"}`}
              onClick={addTodo}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div
        className="shadow-lg  w-75 m-auto px-3"
        style={{ minHeight: "200px", paddingTop: "2px" }}
      >
        <div className="row  mt-5 ">
          <div className="col-6 ">
            <button
              onClick={() => {
                setIsPending(true);
                console.log(isPending);
              }}
              className={`card btn-area ${
                isPending === true && "active"
              } shadow-sm text-primary  p-2`}
            >
              <h3>PENDING</h3>
            </button>
          </div>
          <div className="col-6 ">
            <button
              onClick={() => {
                setIsPending(false);
                console.log(isPending);
              }}
              className={`card btn-area ${
                isPending === false && "active"
              } shadow-sm  text-primary  p-2`}
            >
              <h3>COMPLETED</h3>
            </button>
          </div>
        </div>
        <div className=" row todo-list g-4">
          {
          
        isPending=== true &&  todos.map((item, index) => {
            return (
              <div
                className="  col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"
                key={index}
              >
                <div className="card card-area rounded shadow">
                  <h3>{item.titles === "" ? "Untitled" : item.titles} </h3>
                  <p>
                    <i>
                      {item.descriptions === ""
                        ? "No desecription provided"
                        : item.descriptions}
                    </i>
                  </p>
                  <div className="d-flex justify-content-around">
                    <h6 className="bd-highlight">
                      {item.priority === "" ? "NO PRIORITY SET" : item.priority}
                    </h6>
                    <h6>
                      {item.deadlines === "" ? "NO DEADLINES" : item.deadlines}
                    </h6>
                  </div>
                  <div className="d-flex justify-content-around shadow-sm p-2">
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(index)}
                    >
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
                    <button type="button" className="btn btn-primary"
                    onClick={()=> handleComplete(index)}
                    >
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
            );
          })}
        {  
          isPending === false &&  completedTaskArray.map((item, index) => {
            return (
              <div
                className="  col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"
                key={index}
              >
                <div className="card card-area rounded shadow">
                  <h3>{item.titles === "" ? "Untitled" : item.titles} </h3>
                  <p>
                    <i>
                      {item.descriptions === ""
                        ? "No desecription provided"
                        : item.descriptions}
                    </i>
                  </p> <br />
                  <p><i>
                    Finished on  : {item.completedAt}
                    </i></p>
                  <div className="d-flex justify-content-around">
                    <h6 className="bd-highlight">
                      {item.priority === "" ? "NO PRIORITY SET" : item.priority}
                    </h6>
                    <h6>
                      {item.deadlines === "" ? "NO DEADLINES" : item.deadlines}
                    </h6>
                  </div>
                  <div className="d-flex justify-content-around shadow-sm p-2">
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => handleDeleteCompleted(index)}
                    >
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
                  </div>
                </div>
              </div>
            );
          })
          
          }
        </div>
      </div>
    </div>
  );
}

export default App;
