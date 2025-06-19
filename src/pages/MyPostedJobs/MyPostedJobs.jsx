import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobPostedList from './JobPostedList';
// import { jobPostCreatedByPromise } from '../../api/jobApi';
import Loader from '../shared/Loader';
import useJobApi from '../../api/useJobApi';

const MyPostedJobs = () => {
    const { user } = useAuth();
    const {jobPostCreatedByPromise} = useJobApi();
    return (
        <div>
            
            <Suspense fallback={<Loader></Loader>}>
                <JobPostedList jobPostCreatedByPromise={jobPostCreatedByPromise(user.email)}></JobPostedList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;