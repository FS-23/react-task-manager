import { db } from '../firebase-config'
import { collection , getDocs } from 'firebase/firestore'
import { useState , useEffect} from 'react'
function TaskList(){

    let tasksRef = collection(db , 'tasks')
    let [inputs , setInputs] = useState({})
    let tasks = [
         {id: 1 , title: "Learn react" , description: "Learn react with w3a"} , 
         {id: 2 , title: 'Learn laravel' , description: "Learn laravel with Dodji" }
    ]

    function handleOnChange(event){
        let name = event.target.name
        let value = event.target.value

        setInputs(inputs => ({...inputs , [name]: value}))
    }

    function handleOnSubmit(event){
        event.preventDefault();
        console.log('inputs:', inputs)
    }

    function getTasks(){
        getDocs(tasksRef)
         .then(res => console.log('response:', res))
         .catch(err => console.log('error:', err))
    }

    useEffect(()=>{
        getTasks()
    })
    return (
        <div>
            {
                tasks.map( (task , index) => (
                    <div>
                        {task.title} - {task.description}
                    </div>
                ))

                
            }

            <div>
                <form onSubmit={handleOnSubmit}>
                    <input onChange={handleOnChange} name="title" placeholder='title'/>
                    <input onChange={handleOnChange} name="description" placeholder='description'/>
                    <button>Enregistrer</button>
                </form>
            </div>
        </div>
    )
}

export default TaskList