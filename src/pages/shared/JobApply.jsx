import React from 'react';
import { useNavigate, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleApplyFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            github,
            resume
        }

        // send applicant data to the server
        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log("after sending applicant information", res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your application has been submitted",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/myApplications')
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='my-20'>
            <form onSubmit={handleApplyFormSubmit} className="fieldset bg-base-200 border-base-300 rounded-box mx-auto w-xs border p-4">
                <h1 className="text-3xl md:text.4xl mb-3">Apply for</h1>

                <label className="label">LinkedIn link</label>
                <input type="url" name='linkedIn' className="input" placeholder="LinkedIn link" />

                <label className="label">Github link</label>
                <input type="url" name='github' className="input" placeholder="Github link" />

                <label className="label">Resume</label>
                <input type="url" name='resume' className="input" placeholder="Resume link" />
                <button type='submit' className='btn'>Apply</button>
            </form>
        </div>
    );
};

export default JobApply;