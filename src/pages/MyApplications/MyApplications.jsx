import React, { Suspense } from 'react';
import MyApplicationStats from './MyApplicationStats';
import MyApplicationsList from './MyApplicationsList';
import Loader from '../shared/Loader';
import useAuth from '../../hooks/useAuth';
import useApplicationApi from '../../api/useApplicationApi';



const MyApplications = () => {
    const {user} = useAuth();
    const {applicationPromise} = useApplicationApi();


   
    return (
        <div className='w-11/12 mx-auto my-8 min-h-[calc(100vh-240px)]'>
            <MyApplicationStats></MyApplicationStats>
            <Suspense fallback={<Loader></Loader>}>
                <MyApplicationsList applicationPromise={applicationPromise(user.email)}></MyApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplications;