
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/home/Home';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/register',
                Component: Register
            }
        ]

    }
])

export default router;