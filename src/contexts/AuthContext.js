import React,{ createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../config';
import {signInWithEmailAndPassword , onAuthStateChanged , signOut} from 'firebase/auth';

const AuthContext = createContext();


export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}){

    const [currentUser,setCurrentUser] = useState();
    const [loading,setLoading] = useState(true);

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout(){
         return signOut(auth);
    }

    useEffect(()=>{

        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false);
        })  

        return unsubscribe
    },[])

    const value={
        currentUser,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={value}>  
            {!loading && children}
        </AuthContext.Provider>
    )
}

