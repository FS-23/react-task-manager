import { useState } from 'react'
function Login(){
    let [email , setEmail]= useState('')
    let [password , setPassword]= useState('')
    let [loading , setLoading]= useState(false)

  //  let [count , setCount] = useState(0)
    setCount(155) =>  count = 155
    //setEmail('Noor') => email = "noor"
    
    let [nb1 , nb2 , nb3, nb4] = [45,2,3,89,52]

 


    console.log('useState(12)', useState(12))
     
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
                         {loading ? <div className='spinner-border ms-1 spinner-border-sm'></div>: ''}
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
