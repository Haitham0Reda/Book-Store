import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../Components/Home/Home';
import Shop from '../Components/Shop/Shop';
import Blog from '../Components/Blog/Blog';
import About from '../Components/About/About';
import SingleBook from '../Components/SingleBook/SingleBook';
import DashboardLayout from '../Components/Dashboard/DashboardLayout';
import UploadBook from '../Components/Dashboard/UploadBook';
import ManageBooks from '../Components/Dashboard/ManageBooks';
import EditBooks from '../Components/Dashboard/EditBooks';
import Dashboard from '../Components/Dashboard/Dashboard';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) => fetch(`http://localhost:4040/book/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBook />
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBooks />
            },
            {
                path: "/admin/dashboard/edit-book/:id",
                element: <EditBooks />,
                loader: ({params})=>fetch(`http://localhost:4040/book/${params.id}`)
            }
        ]
    }
])

export default Router