import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/shared/NavBar';
import Footer from '../pages/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;