import { db } from '../firebase-config'
import { collection } from 'firebase/firestore'
import { useState } from 'react'
function TaskList(){
    console.log('collection', collection)
    let [inputs , setInputs] = useState()
    let tasks = [
         {id: 1 , title: "Learn react" , description: "Learn react with w3a"} , 
         {id: 2 , title: 'Learn laravel' , description: "Learn laravel with Dodji" }
        ]

    function handleOnChange(event){
        let name = event.target.name
        let value = event.target.value

        setInputs(inputs => ({...inputs , [name]: value}))
    }
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
                    <input onChange={handleOnChange} name="title" placeholder='title'/>
                    <button>Enregistrer</button>
                </form>
            </div>
        </div>
    )
}

export default TaskList