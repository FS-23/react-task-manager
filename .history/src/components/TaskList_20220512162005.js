import { db } from '../firebase-config'
import { collection } from 'firebase/firestore'
function TaskList(){
    console.log('collection', collection)
    let tasks = [
         {id: 1 , title: "Learn react" , description: "Learn react with w3a"} , 
         {id: 2 , title: 'Learn laravel' , description: "Learn laravel with Dodji" }
        ]

    return (
        <div>
            {
                tasks.map( (task , index) => (
                    <div>
                        {task.title} - {task.description}
                    </div>
                ))
            }
        </div>
    )
}

export default TaskList