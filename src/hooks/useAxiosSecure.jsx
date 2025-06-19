import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const instance = axios.create({
    baseURL: 'https://career-code-server-five.vercel.app'
})

const useAxiosSecure = () => {
    const { user, signOutUser } = useAuth();
    // request interceptors
    instance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config
    })

    // response interceptors
    instance.interceptors.response.use(response => {
        return response
    },
    error => {
        console.log('error from interceptors', error);
        if(error.status === 401 || error.status === 403){
            signOutUser()
            .then(() => {
                console.log('Sign out due to 401 error');
            })
            .catch(err => {
                console.log(err);
            })
        }
        return Promise.reject(error)
    }
)

    return instance;
};

export default useAxiosSecure;