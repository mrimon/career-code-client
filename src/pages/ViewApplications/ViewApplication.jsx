import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplication = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();
    console.log(job_id, applications);

    const handleStatus = (e, application) => {
        console.log(e.target.value, application);

        axios.patch(`http://localhost:3000/applications/${application}`, {
            status: e.target.value
        })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application Status Updated!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            {applications.length} Application on this Job: {job_id}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Applicant</th>
                            <th>Resume</th>
                            <th>Github Link</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            applications.map((application, index) => <tr key={index} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{application.applicant}</td>
                                <td>{application.resume}</td>
                                <td>{application.github}</td>
                                <td>
                                    <select onChange={(e) => handleStatus(e, application._id)} defaultValue={application.status} className="select">
                                        <option disabled={true}>Update Status</option>
                                        <option>Pending</option>
                                        <option>Hired</option>
                                        <option>Interview</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;