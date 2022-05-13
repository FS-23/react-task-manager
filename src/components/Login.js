import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login(){
    let [email , setEmail]= useState('')
    let [password , setPassword]= useState('')
    let [loading , setLoading]= useState(false)

    let navigate = useNavigate()

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
           navigate('/')
        }, 1000)
    }
     return(
         <>
             <div className='position-fixed vw-100 vh-100  top-0'>
                    <div className="login-bg position-absolute opacity-25 top-0 w-100 h-100">

                    </div>

                    <div className='position-absolute translate-middle top-50 start-50'>
                         <div className='modal-dialog' style={{width: '500px' }}>
                               <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h2 className='modal-title'>Connexion</h2>
                                        <a href='#'>S'enregistrer</a>
                                    </div>
                                    <div className='modal-body'>
                                    <form onSubmit={handleFormSubmit}>
                                            <div className="">
                                                <label className="form-label">Email</label>
                                                <input 
                                                    className="form-control" 
                                                    type="email"
                                                    onChange={handleEmailChange}
                                                    placeholder="Email"/>
                                            </div>
                                            <div className="mt-4">
                                            <label className="form-label">Password</label>
                                            <input 
                                                className="form-control" 
                                                type="password"
                                                onChange={handlePasswordChange}
                                                placeholder="password"/>
                                            </div>
                                            <button className="btn btn-primary mt-4">
                                                Connecter
                                                {loading ? <div className='spinner-border ms-1 spinner-border-sm'></div>: ''}
                                            </button>
                                            
                                        </form>
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


                 */
