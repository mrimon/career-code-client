import React, { use } from 'react';
import { AuthContext } from '../contexts/authContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/shared/Loader';


const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }
    if(!user){
        return <Navigate to='/signIn' state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoute;