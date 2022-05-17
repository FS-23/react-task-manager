import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from 'firebase/auth'


export  function signUserUp(email , password){
    try{

        let response =  createUserWithEmailAndPassword(auth , email , password).then(...arguments.).catch(...arguments.)
        console.log(':lkhkg,hv,nc ')

    }catch(err){

    }

}