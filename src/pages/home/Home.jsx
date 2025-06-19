import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const jobPromise = fetch('https://career-code-server-five.vercel.app/jobs').then(res => res.json())
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <HotJobs jobPromise={jobPromise}></HotJobs>
        </div>
    );
};

export default Home;