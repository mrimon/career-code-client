import React from 'react';
import { motion } from "motion/react";


const Button = ({ label, type }) => {
    return (
        <div>
            <motion.button
                whileHover={{ 
                    y: -5,
                    transition: {duration: .5} 
                }}
                whileTap={{
                    background: "#2e86de",
                }}
                type={type}
                className='px-8 py-2 bg-gradient-to-r from-blue-600 to-[#0abde3] text-white  rounded-lg'>{label}</motion.button>
        </div>
    );
};

export default Button;