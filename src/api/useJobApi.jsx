import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useJobApi = () => {
    const axiosSecure = useAxiosSecure();

    const jobPostCreatedByPromise = email => {
        return axiosSecure.get(`/jobs/applications?email=${email}`)
            .then(res => res.data)
    }
    return {jobPostCreatedByPromise};
};

export default useJobApi;