import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // register user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // log out 
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser?.email){
                const userData = {email: currentUser.email};
                axios.post('http://localhost:3000/jwt', userData, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('after token jwt' , res.data);
                })
                .catch(err => {
                    console.log(err);
                })
            }
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])


    const authData = {
        loading,
        user,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,


    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;