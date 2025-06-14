import React from 'react';
import { motion } from "motion/react";
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';
import squarePng from '../../assets/team/square2.png';
import Button from '../shared/Button';
import { FaUserTie } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='pb-10 md:pb-20 bg-[conic-gradient(from_45deg_at_50%_50%,#feca5730,#0abde330,#8395a730)] '>
            <div className="hero min-h-96  w-11/12 mx-auto ">
                <div className="hero-content  flex-col lg:flex-row-reverse gap-12">
                    <div className='flex-1'>
                        <div className='flex'>

                            <motion.img
                                animate={{
                                    y: [100, 150, 100],
                                    transition: { duration: 5, repeat: Infinity }
                                }}
                                src={team1}
                                className="max-w-sm border-[#40d1f2] border-s-8 border-b-8 rounded-t-[50px] rounded-br-[50px] shadow-2xl"
                            />
                            <motion.img
                                animate={{
                                    x: [0, 80, 0],
                                    transition: { duration: 5, repeat: Infinity, delay: 2 }
                                }}
                                src={squarePng}
                                className='w-25 h-25 mt-40'
                                alt="" />
                        </div>
                        <div className='flex '>
                            <motion.img
                                animate={{
                                    y: [0, 50, 0],
                                    transition: { duration: 5, repeat: Infinity, delay: 3 }
                                }}
                                src={squarePng}
                                className='w-25 h-25 ml-12 mt-35 z-10'
                                alt="" />
                            <motion.img
                                animate={{
                                    x: [100, 150, 100],
                                    transition: { duration: 10, delay: 5, repeat: Infinity }
                                }}
                                src={team2}
                                className="max-w-sm -ml-25 border-[#70dcf4] border-s-8 border-b-8 rounded-t-[50px] rounded-br-[50px] shadow-2xl"
                            />

                        </div>
                    </div>
                    
                    <div className='flex-1'>
                        <motion.h1
                            animate={{
                                y: [200, 0],
                                transition: { duration: 2 }
                            }}
                            className="text-5xl font-bold">Remote <motion.span
                                animate={{
                                    color: ['#f91e88', '#ce1ef9', '#ff5733', '#1e56f9', '#afff33', '#33fff3', '#6a1ef9',],
                                    transition: { duration: 4, repeat: Infinity }
                                }}
                            > Job</motion.span> seeker!</motion.h1>
                        <motion.p
                            animate={{
                                y: [90, 0],
                                transition: { duration: 2 }
                            }}
                            className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </motion.p>
                        <motion.div
                            animate={{
                                y: [-80, 0],
                                transition: { duration: 2, ease: "easeInOut" }
                            }}
                            className='bg-white flex justify-around p-2 rounded-2xl'>
                            <div>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1">
                                        <li>
                                            <details>
                                                <summary>Industry</summary>
                                                <ul className="p-2">
                                                    <li><a>Submenu 1</a></li>
                                                    <li><a>Submenu 2</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1">
                                        <li>
                                            <details>
                                                <summary>Location</summary>
                                                <ul className="p-2">
                                                    <li><a>Bangladesh</a></li>
                                                    <li><a>USA</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <input type="search" className='outline-none' name="search" placeholder='Your Query' id="" />
                                <Button label='Search'></Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;