import { useState } from 'react'
function Login(){
    let [email , setEmail]= useState('')
    let [password , setPassword]= useState('')
    let [loading , setLoading]= useState(false)
     
    function handleEmailChange(event){
            setEmail(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
        setLoading(true)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        console.log('form infos', {email , password})
    }
     return(
         <>
             <div>
                 <form onSubmit={handleFormSubmit}>
                     <div className="mt-4">
                        <input className="form-control" onChange={handleEmailChange}/>
                     </div>
                     <div className="mt-4">
                       <input className="form-control" onChange={handlePasswordChange}/>
                     </div>
                     <button className="btn btn-primary mt-4">Connecter</button>
                     {loading ? <div className='spinner-border'></div>: ''}
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
