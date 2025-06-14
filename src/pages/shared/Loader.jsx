import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex items-center justify-center min-h-[calc(100vh-242px)]'>
            <PuffLoader 
                color='#0abde3'
            />
        </div>
    );
};

export default Loader;