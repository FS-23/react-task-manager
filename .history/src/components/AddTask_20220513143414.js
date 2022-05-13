import { useState } from "react";  
function AddTask(){      
    let [inputs, setInputs] = useState({})      
    function handleOnChange(event) {         
        let name = event.target.name         
        let value = event.target.value          
        setInputs(inputs=>({...inputs, [name] : value}))     
    }      
    function handleOnSubmit (event) {         
        event.preventDefault();         
        console.log(inputs)     
    }               
    return(
        <div className="w-50 shadow-lg m-auto p-3">
            <h2>
                New Task
            </h2>
            <form onSubmit= {handleOnSubmit} >

               <div className="form-group">
                   <label className="form-label">TaskTitle</label>
                   <input className="form-control" type = "text" name="title" required onChange = {handleOnChange} />
               </div>

               <div className="form-group">
                   <label className="form-label">TaskDescription</label>
                   <textarea className="form-control" type = "text" name="description" required onChange = {handleOnChange}></textarea>

               </div>

               <div className="form-group">
                   <label className="form-label">TaskPriority</label>
                   <select className="form-control" name = "priority" required onChange = {handleOnChange}>
                       <option value= "">Please choose</option>
                       <option value= "low">low</option>
                       <option value= "medium">medium</option>
                       <option value= "high">high</option>
                   </select>

               </div>

               <div className="mt-4">
                   <button className="btn btn-primary">Save</button>
               </div>

            </form>

        </div>
    )
}

export default AddTask