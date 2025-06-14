import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { motion } from "motion/react";
import office from '../../assets/team/office.jpg'
import { MdWorkOutline } from 'react-icons/md';
import Button from '../shared/Button';
import { LiaIndustrySolid } from "react-icons/lia";
import { AiOutlineDollar } from "react-icons/ai";
import { RiCupLine } from "react-icons/ri";
import { MdBrowserUpdated } from "react-icons/md";
import { FaFacebook, FaTwitter, FaUserTie, FaWhatsapp } from "react-icons/fa";
import { BiSolidUserBadge } from "react-icons/bi";
import { FiWatch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";



const JobDetails = () => {
    const jobInfo = useLoaderData();
    const [jobs, setJobs] = useState(null)
    console.log(jobInfo);
    const {
        _id, title, jobType, salaryRange, responsibilities
        , company_logo, applicationDeadline, company, hr_email, location, updatedAt, jobLevel, experience, aboutCompany, essentialSkills
    } = jobInfo;

    const similarJobs = jobs?.filter(similar => similar._id !== jobInfo._id);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
    return (
        <div className='w-11/12 mx-auto'>
            {/* details banner */}
            <div className=' my-16'>
                <img className='max-h-[500px] rounded-2xl w-full ' src={office} alt="" />
            </div>
            {/* details title */}
            <div className='flex items-center justify-between my-8'>
                <div>
                    <h1 className='text-2xl md:text-4xl font-bold mb-2'>{title}</h1>
                    <p className='flex items-center gap-1 text-lg text-gray-500'><MdWorkOutline /> {jobType}</p>
                </div>
                <div>
                    <Link to={`/jobApply/${_id}`}>
                        <Button label='Apply Now'></Button>
                    </Link>

                </div>
            </div>
            <div className='border-b border-b-gray-300 mb-8'></div>
            {/* employment details */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12'>
                {/* left column */}
                <div className='md:col-span-2'>

                    <div className='p-2 md:p-4  rounded-sm border border-gray-300'>
                        <h2 className='text-2xl md:text-3xl font-bold '>Employment Information</h2>
                        <div className='border-b border-b-gray-300 my-4'></div>
                        {/* Info */}
                        <div className='grid grid-cols-1 md:grid-cols-2 md:justify-between'>
                            {/* left INFO */}
                            <div className='space-y-8 text-lg md:col-span-1'>

                                <div className='flex '>
                                    <span className='flex gap-1 items-center text-gray-400'>
                                        <LiaIndustrySolid />
                                        <span>Industry</span>
                                    </span>
                                    <span className='ml-20 text-gray-900'>{company}</span>
                                </div>
                                <div className='flex '>
                                    <span className='flex gap-1 items-center text-gray-400'>

                                        <AiOutlineDollar />
                                        <span>Salary</span>
                                    </span>
                                    <span className='ml-20 text-gray-900'>{salaryRange.min} - {salaryRange.max}</span>
                                </div>
                                <div className='flex '>
                                    <span className='flex gap-1 items-center text-gray-400'>
                                        <RiCupLine />
                                        <span>Job Type</span>
                                    </span>
                                    <span className='ml-20 text-gray-900'>{jobType}</span>
                                </div>
                                <div className='flex '>
                                    <span className='flex gap-1 items-center text-gray-400'>
                                        <MdBrowserUpdated />
                                        <span>Updated</span>
                                    </span>
                                    <span className='ml-20 text-gray-900'>{updatedAt}</span>
                                </div>
                            </div>
                            {/* right INFO */}
                            <div className='space-y-8 text-lg md:col-span-1'>

                                <div className='flex '>
                                    <span className='flex gap-1 items-center text-gray-400'>
                                        <FaUserTie />
                                        <span>Job level</span>
                                    </span>
                                    <span className='ml-20 text-gray-900'>{jobLevel}</span>
                                </div>
                                <div className='flex '>
                                    <span className='flex gap-1 items-center text-gray-400'>
                                        <BiSolidUserBadge />
                                        <span>Experience</span>
                                    </span>
                                    <span className='ml-20 text-gray-900'>{experience}</span>
                                </div>
                                <div className='flex '>
                                    <span className='flex gap-1 items-center text-gray-400'>
                                        <FiWatch />
                                        <span>Deadline</span>
                                    </span>
                                    <span className='ml-20 text-gray-900'>{applicationDeadline}</span>
                                </div>
                                <div className='flex '>
                                    <span className='flex gap-1 items-center text-gray-400'>
                                        <IoLocationOutline />
                                        <span>Location</span>
                                    </span>
                                    <span className='ml-20 text-gray-900'>{location}</span>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* about company */}
                    <div className='my-8'>
                        <h1 className='text-2xl md:text-3xl font-bold mb-3'>Welcome to {company} Team</h1>
                        <p className='text-gray-500'>{aboutCompany}</p>
                    </div>
                    {/* essential skills */}
                    <div className='my-8'>
                        <h1 className='text-2xl md:text-3xl font-bold mb-3'>Essential knowledge, Skills and Experience</h1>
                        {
                            essentialSkills.map((skill, index) => <li className='ml-8 text-gray-500' key={index}>{skill}</li>)
                        }
                    </div>
                    {/* responsibilities */}
                    <div className='my-8'>
                        <h1 className='text-2xl md:text-3xl font-bold mb-3'>Responsibilities</h1>
                        {
                            responsibilities.map((skill, index) => <li className='ml-8 text-gray-500' key={index}>{skill}</li>)
                        }
                    </div>
                    <div>
                        <h1 className='text-2xl text-gray-500 font-bold'>--{company}--</h1>
                    </div>
                    <div className='border-b border-b-gray-300 my-8'></div>

                    {/* button */}
                    <div className='flex justify-between'>
                        <div>
                            <Link to={`/jobApply/${_id}`}>
                                <Button label='Apply Now'></Button>
                            </Link>
                        </div>
                        <div className='flex gap-2'>
                            <p className='text-gray-500 font-medium'>Share this</p>
                            <div className='flex gap-2'>
                                <FaFacebook className='text-blue-500 hover:text-blue-700' size={25} />
                                <FaTwitter className='text-blue-700 hover:text-blue-900' size={25} />
                                <FaWhatsapp className='text-green-400 hover:text-green-700' size={25} />
                            </div>
                        </div>
                    </div>

                </div>
                {/* right column */}
                <div className='md:col-span-1 space-y-8'>
                    <div className='p-2 md:p-4 flex flex-col justify-between  border rounded-sm border-gray-300'>
                        <div className='flex gap-6'>
                            <img className='p-5 border border-gray-300 rounded-2xl' src={company_logo} alt="" />
                            <div className='text-gray-400'>
                                <h3 className='text-2xl text-gray-800 font-bold'>{company}</h3>
                                <p className='flex items-center gap-1'><IoLocationOutline />{location}</p>
                            </div>
                        </div>
                        <div className='text-gray-400'>
                            <p>{aboutCompany}</p>
                        </div>
                        <div className='text-gray-400'>
                            <li>{location}</li>
                            <li>{hr_email}</li>
                        </div>
                    </div>
                    <div className='p-2 md:p-4 flex flex-col justify-between  border rounded-sm border-gray-300'>
                        <h2 className='text-xl md:text-2xl font-medium'>Similar jobs</h2>
                        <div className='border-b border-b-gray-300 my-4'></div>
                        <div>
                            {
                                similarJobs?.map(job => <motion.div
                                    whileHover={{
                                        y: -5,
                                        transition: { duration: 0.3 }
                                    }}
                                    key={job._id}
                                    className='mb-2 cursor-pointer p-2 flex gap-3 border-b border-b-gray-300'>
                                    <div>
                                        <img className='w-14' src={job.company_logo} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-medium text-[#0abde3]'>{job.title}</h2>
                                        <p className=' mt-3 mb-1 text-gray-400 flex items-center gap-1'><MdWorkOutline /> {job.jobType}</p>
                                        <div className='flex gap-4 items-center '>
                                            <p> $<span className='font-semibold'>{job.salaryRange.max}</span>/month</p>
                                            <p className=' text-gray-400 flex items-center gap-1'><MdWorkOutline /> {job.location}</p>
                                        </div>
                                    </div>
                                </motion.div>)
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default JobDetails;