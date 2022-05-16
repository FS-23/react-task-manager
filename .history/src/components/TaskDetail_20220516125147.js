import { Link, useParams , useNavigate } from "react-router-dom"

import { collection , getDoc , doc , deleteDoc} from 'firebase/firestore'
import { db } from "../firebase-config"
import { useEffect, useState  } from "react"

function TaskDetail(){
     let taskRef = collection(db, 'tasks')
     let params = useParams()

     let navigate = useNavigate()

     let [task ,  setTask] = useState({})

     console.log('params:', params)

    // let []

     let getOneDoc = async (id)=>{
           let docRef = doc(taskRef , id)
           console.log('_doc:', docRef)
           let result = await  getDoc(docRef)
           console.log('result:',{... result.data(), id: result.id})
           setTask({... result.data(), id: result.id})
     }

     let onRemoveTask = async ()=>{
        let docRef =  doc(taskRef , params.id)
        let result = await deleteDoc(docRef)
        console.log('result:', result)

        if(result == undefined) navigate('/tasks')
     }

     useEffect(()=>{
         getOneDoc(params.id)
     },[])
     return (
        <div className="w-50 shadow-lg m-auto p-3">
             <div className='d-flex mb-2  align-items-center'>
                <h4 className="me-2">{task.title} </h4>
                <button className={task.completed ? 'btn btn-outline-success btn-sm' : 'btn btn-outline-warning btn-sm'}>{task.completed ? "Completed" : "In progress"}</button>
            </div>
            <p>{task.description}</p>
            <div className="d-flex justify-content-between">
               <Link  className="btn btn-light btn-sm" to="/tasks/">List</Link>
               <div>
                   <button className="btn btn-danger ms-3" onClick={onRemoveTask}>Remove</button>
               </div>
            </div>
        </div>
     )
}

export default TaskDetail