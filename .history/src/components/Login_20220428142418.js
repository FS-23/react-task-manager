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
             <div className='position-fixed vw-100 vh-100  top-0'>
                    <div className="login-bg position-absolute opacity-25 top-0 w-100 h-100">

                    </div>

                    <div className='position-absolute translate-middle top-50 start-50'>
                         <div className='modal-dialog' style={{width: '500px'}}>
                               <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h2 className='modal-title'>Connexion</h2>
                                    </div>
                                    <div className='modal-body'>
                                          hello
                                    </div>
                               </div>
                         </div>
                    </div>
             </div>
         </>
     )
}

export default Login




/*

<form onSubmit={handleFormSubmit}>
                     <div className="mt-4">
                        <input className="form-control" onChange={handleEmailChange}/>
                     </div>
                     <div className="mt-4">
                       <input className="form-control" onChange={handlePasswordChange}/>
                     </div>
                     <button className="btn btn-primary mt-4">
                         Connecter
                         {loading ? <div className='spinner-border ms-1 spinner-border-sm'></div>: ''}
                     </button>
                     <div className='mt-3'>
                            email: {email} --- 
                            password: {password}
                     </div>
                 </form>
                 */
