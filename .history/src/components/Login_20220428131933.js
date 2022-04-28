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
        
    }

    function handleFormSubmit(event){
        event.preventDefault()
        console.log('form infos', {email , password})
        setLoading(true)
        setTimeout(()=> {
           setLoading(false)
        }, 3000)
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
                     <button className="btn btn-primary mt-4">
                         Connecter
                         {loading ? <div className='spinner-border'></div>: ''}
                     </button>
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
