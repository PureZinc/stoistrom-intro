import React from 'react'

export default function Footer() {
  return (
    <footer className="flex bg-orange-100 text-black py-4 w-full mt-5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-5">
          <p className="text-sm">&copy; {new Date().getFullYear()} Nov8 Devs</p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
            <a href="#" className="text-sm hover:text-gray-400">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
