import "./App.css";
import React , {useState } from "react";
function App() {

  const  [isPending , setIsPending] = useState(true) ;
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>My To do</h1>
      <div className="todo-wrapper rounded shadow-sm">
        <div className="todo-input">
          <div className="todo-input-item">
            <div className="row">
              <div className="col-6">
                <label htmlFor="title" style={{ marginRight: "100px" }}>
                  {" "}
                  <h6> TITLE</h6>{" "}
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="title"
                  placeholder="What's the task title ?"
                />
              </div>
            </div>
          </div>
          <div className="todo-input-item">
            <div className="row">
              <div className="col-6">
                <label htmlFor="Description" style={{ marginRight: "50px" }}>
                  {" "}
                  <h6>DESCRIPTION</h6>
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="Description"
                  placeholder="What's the task description ?"
                />
              </div>
            </div>
          </div>
          <div className="todo-input-item">
            <div className="row">
              <div className="col-6">
                <label htmlFor="Priority" style={{ marginRight: "50px" }}>
                  {" "}
                  <h6>PRIORITY</h6>
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="Priority"
                  placeholder="What's the task Priority ?"
                />
              </div>
            </div>
          </div>
          <div className="todo-input-item">
            <div className="row">
              <div className="col-6">
                <label htmlFor="Deadline" style={{ marginRight: "50px" }}>
                  {" "}
                  <h6>DEADLINE</h6>
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="Deadline"
                  placeholder="What's the task Deadline ?"
                />
              </div>
            </div>
          </div>
          <div className="todo-input-submit d-flex justify-content-around mt-3">
            <button className="btn btn-primary w-25">Add</button>
          </div>
        </div>
      </div>
     
     <div className="shadow-lg mt-2 w-75 m-auto px-3" style={{minHeight : "200px" , paddingTop : "2px"}}>
     <div className="d-flex justify-content-around mt-5">
          <button
          onClick={()=>{ 
            setIsPending(true) ;
             console.log(isPending) ; 
             
            }
            } 
             className={`card btn-area ${isPending == true && 'active'} shadow-sm align-item-center text-primary  p-2`}>
          <h4>PENDING</h4>
          </button>
        <button
         onClick={
          ()=>{
         setIsPending(false) ;
          console.log(isPending) ;
        }
          } 
          className={`card btn-area ${isPending == false && 'active'} shadow-sm align-item-center text-primary  p-2`}>
        <h4>COMPLETED</h4>
          </button>
      </div>
     <div className=" row todo-list gx-5  gy-4">
     <div className=" col-4">
       <div className="card card-area rounded shadow-sm">
       <h3>Task </h3>
         <p><u>Desription</u></p>
         <div className="d-flex justify-content-around">
         <h6 className="bd-highlight">Priority</h6>
        <h6>Deadline</h6>
         </div>
       </div>
      </div>
      <div className=" col-4">
    <div className="card card-area rounded shadow-sm">
    <h3>Task </h3>
         <p><u>Desription</u></p>
         <div className="d-flex justify-content-around">
         <h6 className="bd-highlight">Priority</h6>
        <h6>Deadline</h6>
         </div>
    </div>
      </div>
      <div className="col-4">
     <div className="card card-area rounded shadow-sm">
     <h3>Task </h3>
         <p><u>Desription</u></p>
         <div className="d-flex justify-content-around">
         <h6 className="bd-highlight">Priority</h6>
        <h6>Deadline</h6>
         </div>
     </div>
      </div>
     </div>
   
     <div className=" row todo-list gx-5  gy-4">
     <div className=" col-4">
       <div className="card card-area rounded shadow-sm">
       <h3>Task </h3>
         <p><u>Desription</u></p>
         <div className="d-flex justify-content-around">
         <h6 className="bd-highlight">Priority</h6>
        <h6>Deadline</h6>
         </div>
       </div>
      </div>
      <div className=" col-4">
    <div className="card card-area rounded shadow-sm">
    <h3>Task </h3>
         <p><u>Desription</u></p>
         <div className="d-flex justify-content-around">
         <h6 className="bd-highlight">Priority</h6>
        <h6>Deadline</h6>
         </div>
    </div>
      </div>
      <div className="col-4">
     <div className="card card-area rounded shadow-sm">
     <h3>Task </h3>
         <p><u>Desription</u></p>
         <div className="d-flex justify-content-around">
         <h6 className="bd-highlight">Priority</h6>
        <h6>Deadline</h6>
         </div>
     </div>
      </div>
     </div>
   

     {/* todo list area */}

      
  
     </div>
    </div>
  );
}

export default App;
