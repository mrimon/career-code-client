import React, { use } from 'react';
import { Link } from 'react-router';

const JobPostedList = ({ jobPostCreatedByPromise }) => {
    const jobList = use(jobPostCreatedByPromise);
    return (
        <div className='w-11/12 mx-auto my-12'>
            <h1 className=" text-center text-4xl">Jobs posted by You: {jobList.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Deadline</th>
                                <th>Total Application</th>
                                <th>View Application</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row  */}

                            {
                                jobList.map((job, index) => <tr key={index} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{job.title}</td>
                                    <td>{job.applicationDeadline}</td>
                                    <td>{job.application_count}</td>
                                    <td><Link to={`/applications/${job._id}`}>View Application</Link></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default JobPostedList;