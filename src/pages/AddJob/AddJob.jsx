import React from 'react';
import Button from '../shared/Button';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = useAuth();


    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log('form submitted', formData);
        const data = Object.fromEntries(formData.entries());
        // process salary Range 
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        // process requirements
        const requirements = newJob.requirements.split(',').map(req => req.trim());
        newJob.requirements = requirements;
        // process responsibilities
        const responsibilities = newJob.responsibilities.split(',').map(res => res.trim());
        // process essential skills
        const essentialSkills = newJob.essentialSkills.split(',').map(res => res.trim());
        newJob.essentialSkills = essentialSkills;
        newJob.responsibilities = responsibilities;
        newJob.status = 'active';
        console.log(newJob);

        // sending newJob data to the server 
        // fetch('http://localhost:3000/jobs', {
        //     method: 'POST',
        //     headers: {
        //         "content-type" : "application/json"
        //     },
        //     body: JSON.stringify(newJob)
        // }).then(res => res.json())
        // .then(data => {
        //     console.log('after sending data to server',data);
        // })
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "This New Job has been saved and Published",
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
        <div className='w-11/12 mx-auto my-12'>
            <div className=''>
                <h2 className='text-center text-2xl md:text-4xl font-bold '>Please Add a Job</h2>
                <form onSubmit={handleAddJob} className='w-sm mx-auto'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Basic Info</legend>

                        <label className="label">Job Title</label>
                        <input type="text" className="input" name='title' placeholder="Job Title" />

                        <label className="label">Company</label>
                        <input type="text" className="input" name='company' placeholder="Company" />

                        <label className="label">Location</label>
                        <input type="text" className="input" name='location' placeholder="Location" />

                        <label className="label">Company Logo</label>
                        <input type="text" className="input" name='company_logo' placeholder="Company Logo URL" />
                    </fieldset>

                    {/* Job Type */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Type</legend>

                        <div className="filter">
                            <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                            <input className="btn" type="radio" name="jobType" aria-label="On-Site" value='On-Site' />
                            <input className="btn" type="radio" name="jobType" aria-label="Remote" value='Remote' />
                            <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value='Hybrid' />
                        </div>

                    </fieldset>
                    {/* Job Category */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Category</legend>
                        <select defaultValue="Job Category" name='category' className="select">
                            <option disabled={true}>Job Category</option>
                            <option>Engineering</option>
                            <option>Data Scientist</option>
                            <option>Developer</option>
                        </select>
                    </fieldset>
                    {/* daedline */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Application Deadline</legend>
                        <input type="date" name='applicationDeadline' className="input" />
                    </fieldset>
                    {/* Salary Range */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Salary Range</legend>

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                            <div>

                                <label className="label">Minimum Salary</label>
                                <input type="text" name='min' className="input" placeholder="Minimum Salary" />
                            </div>
                            <div>

                                <label className="label">Maximum Salary</label>
                                <input type="text" name='max' className="input" placeholder="Maximum Salary" />
                            </div>
                            <div>

                                <label className="label">Currency</label>
                                <select defaultValue="Select a currency" name='currency' className="select">
                                    <option disabled={true}>Select a currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>EURO</option>
                                </select>
                            </div>

                        </div>

                    </fieldset>
                    {/* Job Description */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Description</legend>
                        <textarea className="textarea" name='description' placeholder="Job description"></textarea>

                    </fieldset>

                    {/* Job Requirements */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Requirements</legend>
                        <textarea className="textarea" name='requirements' placeholder="Job Requirements Separated by comma."></textarea>

                    </fieldset>
                    {/* Essential Skills */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Essential Skills</legend>
                        <textarea className="textarea" name='essentialSkills' placeholder="Essential Skills Separated by comma."></textarea>

                    </fieldset>

                    {/* Job Responsibilities */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Responsibilities</legend>
                        <textarea className="textarea" name='responsibilities' placeholder="Job Responsibilities Separated by comma."></textarea>

                    </fieldset>

                    {/* HR Related Info */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">HR Related Info</legend>

                        <label className="label">HR Name</label>
                        <input type="text" className="input" name='hr_name' placeholder="HR Name" />

                        <label className="label">HR Email</label>
                        <input type="email" defaultValue={user.email} className="input" name='hr_email' placeholder="HR Email" />


                    </fieldset>
                    <div className='my-4'>
                        <Button label='Add Job' type='submit'></Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;