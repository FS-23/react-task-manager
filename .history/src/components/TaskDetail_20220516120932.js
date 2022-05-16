import { Link, useParams } from "react-router-dom"

import { collection , getDoc , doc , deleteDoc} from 'firebase/firestore'
import { db } from "../firebase-config"
import { useEffect, useState } from "react"

function TaskDetail(){
     let taskRef = collection(db, 'tasks')
     let params = useParams()

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

     let onRemoveTask = async (id)=>{
        let docRef =  doc(taskRef , id)
        let result = await deleteDoc(docRef)
        console.log('result:', result)
     }

     useEffect(()=>{
         getOneDoc(params.id)
     },[])
     return (
        <div className="w-50 shadow-lg m-auto p-3">
            <h2>{task.title}</h2>
            <div className="d-flex justify-content-between">
               <Link  className="btn btn-light btn-sm" to="/tasks/">List</Link>
               <div>
                   <button className="btn btn-primary">Edit</button>
                   <button className="btn btn-danger ms-3" onClick={onRemoveTask}>Remove</button>
               </div>
            </div>
        </div>
     )
}

export default TaskDetail