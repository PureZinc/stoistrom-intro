import React from 'react'
import { COMPANY_LINKS as links } from '../service'

export default function Footer() {
  return (
    <footer className="flex bg-transparent text-black py-4 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-5">
          <p className="text-sm">&copy; {new Date().getFullYear()} Nov8 Devs</p>
          <div className="flex space-x-4">
            <a href={links.instagram} className="text-sm hover:text-gray-400">Instagram</a>
            <a href={links.twitter} className="text-sm hover:text-gray-400">Twitter</a>
            <a href={links.github} className="text-sm hover:text-gray-400">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
