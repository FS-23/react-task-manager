import { useParams } from "react-router-dom"

function TaskDetail(){
     let params = useParams()
     return (
        <div className="w-50 shadow-lg m-auto p-3">
            <h2>Detail {params.id}</h2>
        </div>
     )
}