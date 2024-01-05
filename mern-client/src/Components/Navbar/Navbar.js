import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// React Icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

const Navbar = () => {


    // States
    const [menuOpen, setMenuOpen] = useState(false)
    const [sticky, setSticky] = useState(false)


    // Toggle Menu

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    //Hooks
    useEffect(() => {
        const handelScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true)
            } else {
                setSticky(false)
            }
            window.addEventListener('scroll', handelScroll)

        }
        return () => {
            window.addEventListener('scroll', handelScroll)
        }
    }, [])


    // NavItems Here
    const navItems = [
        { link: "Home", path: '/' },
        { link: "About", path: '/about' },
        { link: "Shop", path: '/shop' },
        { link: "Sell Your Book", path: '/admin/dashboard' },
        { link: "Blog", path: '/blog' },
    ]

    return (
        <header className="w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${sticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2"><FaBlog className="inline-block" />Books</Link>

                    {/* Nav item for lg devices */}

                    <ul className="md:flex space-x-8 hidden">
                        {
                            navItems.map(({ link, path }) => (
                                <Link key={path} to={path}
                                    className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                                    {link}
                                </Link>
                            ))
                        }
                    </ul>

                    {/* Button for lg devices */}
                    <div className="space-x-12 hidden lg:flex items-center">
                        <button><FaBarsStaggered className="w-5 hover:text-blue-700 lg:hidden" /></button>
                    </div>

                    {/* Button for mobile  */}

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {
                                menuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />
                            }
                        </button>
                    </div>
                </div>

                {/* Nav-items for sm devices  */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${menuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => (
                            <Link
                                key={path}
                                to={path}
                                className="block text-base text-white uppercase cursor-pointer"
                            >
                                {link}
                            </Link>
                        ))
                    }
                </div>

            </nav>
        </header>
    )
}

export default Navbar