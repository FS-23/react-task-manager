import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from 'firebase/auth'


export async  function signUserUp(email , password){
    try{

        let response =  await createUserWithEmailAndPassword(auth , email , password)
        
        return { success: true , data: response}

    }catch(err){
            return  { success: false , data: err.code}
    }
}


export async  function signUserIn(email , password){
    try{

        let response =  await signInWithEmailAndPassword(auth , email , password)
        
        return { success: true , data: response}

    }catch(err){
            return  { success: false , data: err.code}
    }
}


export async  function logUserOut(){
    try{

        let response =  await signOut(auth)
        
        return { success: true , data: response}

    }catch(err){
            return  { success: false , data: err.code}
    }
}



