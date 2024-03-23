import { useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [navVisible, setNavVisible] = useState(false)

    const navLinks = [
        {
            id: 1,
            name: 'Explore',
            page: 'explore'
        },
        {
            id: 2,
            name: 'Blog',
            page: 'blog'
        },
        {
            id: 3,
            name: 'Pricing',
            page: 'pricing'
        },
        {
            id: 4,
            name: 'Work With Us!',
            page: 'work'
        },
    ]

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-black">
        <div>
            <Link to="/" className="text-4xl main-font-lg text-black">Stoistrom</Link>
        </div>

        <ul className="hidden md:flex space-x-6 text-2xl">
            {navLinks.map((link) => (
                <li key={link.id} 
                    className="cursor-pointer main-font-sm rounded-3xl px-5 py-3 border-black
                    hover:scale-105 transition-all duration-100"
                >
                    <Link to={link.page}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>

        <div
            onClick={() => setNavVisible(!navVisible)}
            className="cursor-pointer pr-4 z-10 md:hidden"
        >
            {navVisible ? <FaX size={30} />: <FaBars size={30} />}
        </div>

        {navVisible && <ul 
            className="md:hidden flex flex-col justify-center items-center absolute z-20
            top-0 left-0 w-full h-screen bg-gradient-to-t from-orange-100 via-orange-100 to-white"
        >
            <li className="cursor-pointer py-5 text-4xl main-font-sm">
                <Link 
                    to="/"
                    onClick={() => setNavVisible(!navVisible)}
                >
                    Home
                </Link>
            </li>
            {navLinks.map((link) => (
                <li key={link.id} className="cursor-pointer py-5 text-4xl main-font-sm">
                    <Link 
                        to={link.page}
                        onClick={() => setNavVisible(!navVisible)}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>}
    </nav>
  )
}
