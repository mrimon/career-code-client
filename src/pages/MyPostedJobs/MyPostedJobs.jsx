import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobPostedList from './JobPostedList';
import { jobPostCreatedByPromise } from '../../api/jobApi';
import Loader from '../shared/Loader';

const MyPostedJobs = () => {
    const { user } = useAuth();
    return (
        <div>
            
            <Suspense fallback={<Loader></Loader>}>
                <JobPostedList jobPostCreatedByPromise={jobPostCreatedByPromise(user.email)}></JobPostedList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;