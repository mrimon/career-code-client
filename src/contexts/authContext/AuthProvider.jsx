import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {

    // register user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };



    const authData = {
        createUser,
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;