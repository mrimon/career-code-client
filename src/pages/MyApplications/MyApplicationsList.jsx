import React, { use, useState } from 'react';
import JobApplicationRow from './JobApplicationRow';

const MyApplicationsList = ({ applicationPromise }) => {
    const myApplications = use(applicationPromise);
    const [applications, setApplications] = useState(myApplications)
    console.log(myApplications);

    // delete application 
    const handleDeleteApplication = id => {
        
        // delete from UI 
        const remainingApplications = applications.filter(application => application._id !== id);
        setApplications(remainingApplications)
        // delete from server 
        fetch(`http://localhost:3000/applications/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('after delete appliction ', data);
        })
    }
    return (
        <div>
            <h1 className='text-center my-20 text-2xl md:text-4xl font-semibold'>
                Job applied so far: {myApplications.length}
            </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Company</th>
                            <th>Job Title</th>
                            <th>Applicant</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        applications.map((application, index) => <JobApplicationRow
                        handleDeleteApplication={handleDeleteApplication}
                        application={application} index={index} key={index}></JobApplicationRow>)
                       }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default MyApplicationsList;