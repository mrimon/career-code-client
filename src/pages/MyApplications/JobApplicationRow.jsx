import React from 'react';
import { MdDelete } from "react-icons/md";
import { motion } from "motion/react";
import Button from '../shared/Button';


const JobApplicationRow = ({ application, index, handleDeleteApplication }) => {
    
    const { _id, company, company_logo, title,applicant } = application;


    
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={company_logo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{company}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-sm opacity-50">{title}</div>

            </td>
            <td><button className="btn btn-ghost btn-xs">{applicant}</button></td>
            <motion.th 
                whileHover={{ 
                    y: -5,
                    transition: {duration: .5} 
                }}
            >
                <button onClick={() => handleDeleteApplication(_id)} className='p-3 bg-gray-50 hover:bg-gray-300 group rounded-full'><MdDelete className='group-hover:text-red-500  ' size={35}></MdDelete></button>
            </motion.th>
        </tr>
    );
};

export default JobApplicationRow;