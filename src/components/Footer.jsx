import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-orange-100 text-black py-4 bottom-0 border-t border-black border-dashed w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
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
