import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import logo from '../../assets/logo/logo.png'
import { motion } from "motion/react";
import Toggle from './Toggle';
import Button from './Button';


const NavBar = () => {
    const { user, signOutUser } = use(AuthContext);

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* for applicant  */}
        {
            user && <>
                <li><NavLink to='/myApplications'>My applications</NavLink></li>
            </>
        }
        {/* for requiter */}
        {
            user && <>
                <li><NavLink to='/addJob'>Add Job</NavLink></li>
                <li><NavLink to='/myPostedJobs'>My Posted Jobs</NavLink></li>
            </>
        }
    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('user signOut');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            className='bg-blue-50 opacity-75 shadow-xl fixed top-0 w-full z-10'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <img className='text-blue-500 w-10' src={logo} alt="" />
                        <Link to='/' className='text-2xl font-bold'>Career Code</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <Toggle></Toggle>
                    {
                        user ?
                            <button onClick={handleSignOut} className='btn'>Sign Out</button>
                            :
                            <>
                                <NavLink to='/signIn'><Button label='Sign In'></Button></NavLink>

                            </>
                    }
                </div>
            </div>
        </motion.nav>
    );
};

export default NavBar;