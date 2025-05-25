import React from 'react';
import { motion } from "motion/react";
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{
                            y: [100, 150, 100],
                            transition: {duration: 5, repeat: Infinity}
                        }}
                        src={team1}
                        className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-[50px] rounded-br-[50px] shadow-2xl"
                    />
                    <motion.img
                        animate={{
                            x: [100, 150, 100],
                            transition: {duration: 10, delay: 5, repeat: Infinity}
                        }}
                        src={team2}
                        className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-[50px] rounded-br-[50px] shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: { duration: 2 }
                        }}
                        className="text-5xl font-bold">Remote <motion.span
                            animate={{
                                color: ['#f91e88', '#ce1ef9', '#ff5733', '#1e56f9', '#afff33', '#33fff3', '#6a1ef9',],
                                transition: { duration: 4, repeat: Infinity }
                            }}
                        > Job</motion.span> seeker!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => console.log('hover started!')}
                        className="btn btn-primary">Get Started</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Banner;