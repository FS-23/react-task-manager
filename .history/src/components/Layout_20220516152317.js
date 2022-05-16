import { Link, Outlet } from "react-router-dom";
import { auth } from '../firebase-config'
import { signOut , onAuthStateChanged  } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

function Layout(){
    let navigate = useNavigate()
    onAuthStateChanged(auth , (currentUser)=>{
        console.log('currentUser:', currentUser)
    })
    async function logOut(){
         try{

            let response =  await signOut(auth)

            console.log('response:', response)

            if(response == undefined) navigate('/login')

         }catch(err){
             alert('sign out error:'+ err.code)
         }
    }
    return (
        <div>
            <div className="text-center bg-light p-2">
                <Link className="btn btn-secondary" to="/tasks/list">Tasks list</Link>  
                <button onClick={logOut} className="btn btn-secondary ms-3" to="/login">Logout</button>
            </div>
            <div className="container mt-5">
               <Outlet />
            </div>
        </div>

    )
}

export default Layout