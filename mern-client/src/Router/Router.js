import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../Components/Home/Home';
import Shop from '../Components/Shop/Shop';
import Blog from '../Components/Blog/Blog';
import About from '../Components/About/About';
import SingleBook from '../Components/SingleBook/SingleBook';

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
                loader: async ({ params }) => {
                    const res = await fetch(`http://localhost:3000/book/${params.id}`);
                    const data = await res.json();
                    return data; // This data will be available in useLoaderData
                }
            }
        ]
    }
])

export default Router