
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/signIn/SignIn';
import JobDetails from '../pages/home/JobDetails';
import PrivateRoute from '../routes/PrivateRoute';
import JobApply from '../pages/shared/JobApply';
import Loader from '../pages/shared/Loader';
import MyApplications from '../pages/MyApplications/MyApplications';
import AddJob from '../pages/AddJob/AddJob';
import MyPostedJobs from '../pages/MyPostedJobs/MyPostedJobs';
import ViewApplication from '../pages/ViewApplications/ViewApplication';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        hydrateFallbackElement: <Loader></Loader>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/jobs/:id',
                Component: JobDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
            },
            {
                path: '/myApplications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
                path: '/addJob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/myPostedJobs',
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: '/applications/:job_id',
                element: <PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)

            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/signIn',
                Component: SignIn
            }
        ]

    }
])

export default router;