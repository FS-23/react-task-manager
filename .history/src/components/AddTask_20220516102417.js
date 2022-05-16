import { useState } from "react";  
import { Link } from 'react-router-dom'
import { db } from '../firebase-config'
import { collection , addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
function AddTask(){      
    let taskRef = collection(db , 'tasks')
    let [inputs, setInputs] = useState({})      
    let navigate = useNavigate()
    function handleOnChange(event) {         
        let name = event.target.name         
        let value = event.target.value          
        setInputs(inputs=>({...inputs, [name] : value}))     
    }      
    async function handleOnSubmit (event) {         
        event.preventDefault();         
        console.log(inputs)     

        inputs.completed = false
        let res = await addDoc(taskRef , inputs);

        console.log('res:', res)

        navigate('/tasks/list')
    }               
    return(
        <div className="w-50 shadow-lg m-auto p-3">
            <h2>
                New Task
            </h2>
            <form onSubmit= {handleOnSubmit} >

               <div className="form-group mt-2">
                   <label className="form-label">TaskTitle</label>
                   <input className="form-control" type = "text" name="title" required onChange = {handleOnChange} />
               </div>

               <div className="form-group mt-2">
                   <label className="form-label">TaskDescription</label>
                   <textarea className="form-control" type = "text" name="description" required onChange = {handleOnChange}></textarea>

               </div>

               <div className="form-group mt-2">
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
                   <Link to="/tasks/list" className="btn btn-danger ms-3">Cancle</Link>
               </div>
            </form>
        </div>
    )
}

export default AddTask