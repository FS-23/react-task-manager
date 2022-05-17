import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from 'firebase/auth'


export async  function signUserUp(email , password){
    try{

        let response =  await createUserWithEmailAndPassword(auth , email , password).then(...arguments.).catch(...arguments.)
        
        return { success: true , data: response}

    }catch(err){
            return  { success: false , data: err.code}
    }
}