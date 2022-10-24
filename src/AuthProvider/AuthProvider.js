import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword, 
    getAuth, onAuthStateChanged, 
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loding, setLoading] = useState(true); 


    const providerLogin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const updateUserProfile = (profile)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }
    
    const createUser = (email,password)=> {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const userLogin = (email,password)=> {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOutUser = ()=> {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }

    },[])

    const authInfo = {user,loding, createUser, userLogin, logOutUser, updateUserProfile, providerLogin};
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;