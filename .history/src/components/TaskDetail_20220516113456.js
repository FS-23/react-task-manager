import { useParams } from "react-router-dom"

import { collection , getDoc , doc} from 'firebase/firestore'
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

     useEffect(()=>{
         getOneDoc(params.id)
     })
     return (
        <div className="w-50 shadow-lg m-auto p-3">
            <h2>{task.title}</h2>
        </div>
     )
}

export default TaskDetail