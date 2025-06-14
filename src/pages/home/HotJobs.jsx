import React, { use } from 'react';
import JobCard from '../shared/jobCard';
import { motion } from "motion/react";


const HotJobs = ({ jobPromise }) => {
    const jobs = use(jobPromise);
    return (
        <div className='w-11/12 mx-auto my-12 md:my-16'>
            <motion.h1 
            animate={{
                
            }}
              className='mb-12 text-center text-4xl md:text-5xl font-semibold'>Hot Jobs of the Day!</motion.h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            
            </div>
        </div>
    );
};

export default HotJobs;