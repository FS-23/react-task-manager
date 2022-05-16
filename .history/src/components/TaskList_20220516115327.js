import { db } from '../firebase-config'
import { collection , getDocs } from 'firebase/firestore'
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
function TaskList(){

    let tasksRef = collection(db , 'tasks')
    let [inputs , setInputs] = useState({})
   

    let [tasks ,  setTasks] = useState([])

    function handleOnChange(event){
        let name = event.target.name
        let value = event.target.value

        setInputs(inputs => ({...inputs , [name]: value}))
    }

    function handleOnSubmit(event){
        event.preventDefault();
        console.log('inputs:', inputs)
    }

    async function getTasks(){
       let res =  await  getDocs(tasksRef)

       console.log('results:', res)
       console.log('res:', res)
       let list = res.docs.map( item => ({...item.data() , id: item.id}))
       console.log('finial list:', list)
       setTasks(list)
        // getDocs(tasksRef)
        //  .then(res => {
        //      console.log('result:', res)
        //      let list = res.docs.map( item => ({...item.data() , id: item.id}))
        //      setTasks(list)
        //      console.log('list:', list)
        //  })
        //  .catch(err => console.log('error:', err))
    }

    useEffect(()=>{
        getTasks()
    },[])
    return (
        <div>
            <div className='row m-0'>
                    {
                        tasks.map( (task , index) => (
                            <div key={index} className="mt-3 col-12 col-sm-6 col-lg-3 col-xl-4">
                                <div className='bg-light p-2'>
                                    <div className='d-flex mb-2 justify-content-between align-items-center'>
                                       <h4>{task.title} </h4>
                                       <button className='btn btn-outline-warning btn-sm'>{task.completed ? "Completed" : "In progress"}</button>
                                    </div>
                                    <div>{task.description}</div>
                                    <div className='mt-3'>
                                        <input  type="checkbox" checked={task.completed ? true : false}/>
                                        <Link className='btn btn-outline-primary ms-2 btn-sm' 
                                              to={"/tasks/"+task.id}>Show more</Link>

                                            
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>
           


            <div className='mt-5 ps-2'>
               <Link to="/tasks/edit/0"  className='btn btn-info'>New task</Link>
            </div>

           
        </div>
    )
}

export default TaskList