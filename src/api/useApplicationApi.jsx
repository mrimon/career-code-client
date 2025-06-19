import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useApplicationApi = () => {
    const axiosSecure = useAxiosSecure();

    const applicationPromise = email => {
       return  axiosSecure.get(`/applications?email=${email}`)
        .then(res => res.data)
    }

    return {
        applicationPromise
    };
};

export default useApplicationApi;