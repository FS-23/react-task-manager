import { db } from '../firebase-config'
import { collection , getDocs } from 'firebase/firestore'
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
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
         .then(res => {
             let list = res.docs.map( item => ({...item.data() , id: item.id}))
             console.log('list:', list)
         })
         .catch(err => console.log('error:', err))
    }

    useEffect(()=>{
        getTasks()
    })
    return (
        <div>
            {
                tasks.map( (task , index) => (
                    <div key={index}>
                        {task.title} - {task.description}
                    </div>
                ))
            }


            <div className='mt-5'>
               <Link to="/tasks/edit/0"  className='btn btn-info'>New task</Link>
            </div>

           
        </div>
    )
}

export default TaskList