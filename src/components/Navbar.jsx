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
    <nav>
        <Link to="/" className="text-4xl main-font-lg text-black">Stoistrom</Link>

        <ul className="hidden md:flex space-x-6 text-2xl">
            {navLinks.map((link) => (
                <Link to={link.page}>
                    <li key={link.id} className="link-desktop">
                        {link.name}
                    </li>
                </Link>
            ))}
        </ul>

        <div id="menu" onClick={() => setNavVisible(!navVisible)} className="cursor-pointer pr-4 z-10 md:hidden">
            {navVisible ? <FaX size={30} />: <FaBars size={30} />}
        </div>

        {navVisible && <ul className="nav-mobile">
            <li className="cursor-pointer py-5 text-4xl main-font-sm">
                <Link to="/" onClick={() => setNavVisible(!navVisible)}>Home</Link>
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
