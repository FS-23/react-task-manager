import { useParams } from "react-router-dom"

import { collection , getDoc , doc} from 'firebase/firestore'
import { db } from "../firebase-config"
import { useEffect } from "react"

function TaskDetail(){
     let taskRef = collection(db, 'tasks')
     let params = useParams()

     let getOneDoc = async (id)=>{
           let _doc = doc(taskRef , id)
           console.log('_doc:', _doc)
           return
           let result = await  getDoc()
           console.log('result:', result)
     }


     useEffect(()=>{
         getOneDoc(params.id)
     })
     return (
        <div className="w-50 shadow-lg m-auto p-3">
            <h2>Detail {params.id}</h2>
        </div>
     )
}

export default TaskDetail