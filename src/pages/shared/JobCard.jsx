import React from 'react';
import { motion } from "motion/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router';
import { MdArrowRightAlt } from "react-icons/md";




const JobCard = ({ job }) => {
    const { company_logo, title, company, category, jobType, location, salaryRange, description, _id} = job
    return (
        <motion.div
            initial={0}
            whileHover={{
                y: -10,
                transition: { duration: 0.3 }
            }}
            
            className="group max-w-md mx-auto bg-white rounded-l-4xl rounded-t-4xl    shadow-md overflow-hidden md:max-w-2xl  transition-shadow duration-300 border-b-4 border-r-4 border-[#0abde330]   relative">
            {/* <!-- Hot Job Badge --> */}
            <div className="absolute top-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-md rounded-tl-md">
                HOT JOB
            </div>

            <div className="p-6 mt-6 h-full flex flex-col justify-around">

                {/* <!-- Job Title & Category --> */}
                <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">{title}</h2>
                    <span className="bg-blue-100 text-cyan-800 text-xs px-2 py-1 rounded-full">{category}</span>
                </div>

                {/* <!-- Company & Location --> */}
                <div className="flex items-center text-gray-600 text-sm mt-2">
                    <img className='w-12' src={company_logo} alt="" />
                    <span className="mr-4">{company}</span>

                    <FaMapMarkerAlt />
                    <span>{location}</span>
                </div>

                {/* <!-- Job Description --> */}
                <p className="mt-3 text-gray-600 text-sm">
                    {description}
                </p>

                {/* <!-- Job Type & Salary --> */}
                <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{jobType}</span>

                    </div>
                    
                </div>
                <div>
                    <p className='mt-2 font-medium'>Salary:</p>
                    <span className="text-cyan-600 font-medium">{salaryRange.min}{salaryRange.currency} - {salaryRange.max}{salaryRange.currency}</span>
                </div>

                {/* <!-- Apply Button --> */}
                <div className="my-3 ">
                    <Link to={`/jobs/${_id}`}>
                        <motion.button
                            whileTap={{
                                scale: 0.9,
                            }}
                            className="w-full group-hover:bg-cyan-500 group-hover:text-white flex items-center justify-center gap-2 bg-[#0abde320] text-[#0abde3] font-bold py-2 px-4 rounded-md transition-colors duration-300">
                                    Show Details <MdArrowRightAlt size={30}/>
                        </motion.button>
                    </Link>
                    
                </div>
            </div>
        </motion.div>

    );
};

export default JobCard;