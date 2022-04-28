import { useState } from 'react'
function Login(){
    let [email , setEmail]= useState('')
    let [password , setPassword]= useState('')
     
    function handleEmailChange(event){
            setEmail(event.target.value)
    }
    function handlePasswordChange(event){
        setEmail(event.target.value)
    }
     return(
       
         <>
             <div>
                 <form>
                     <div className="mt-4">
                        <input className="form-control" onChange={handleEmailChange}/>
                     </div>
                     <div className="mt-4">
                       <input className="form-control" onChange={handlePasswordChange}/>
                     </div>
                     <button className="btn btn-primary mt-4">Connecter</button>

                     <div className='mt-3'>
                            email: {email} --- 
                            password: {password}
                     </div>
                 </form>
             </div>
         </>
     )
}

export default Login
