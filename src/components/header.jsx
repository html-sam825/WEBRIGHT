import React, { useState } from 'react'
import { navLinks } from '../data/data'
import { Menu, X } from 'lucide-react'

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState
// eslint-disable-next-line no-unexpected-multiline
(false)
  return (
    <header className='fixed left-0 top-0 z-40 w-full bg-white py-6 shadow-sm'>
      <div className='container relative flex items-center justify-between'>
        {/* {logo} */}
        <a href="#" >
          <img src="images/Logo.png" alt="logo" />
        </a>
        {/* {mobile menu} */}
        <ul className={`navbar ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className='font-semibold transition-colors hover:text-purple-700'>{link.label}</a>
            </li>
          ))}
          <a href="#download-app" className="primary-btn">Download App</a>

        </ul>
        {/* {lg menu} */}
        <ul className='hidden gap-10 md:flex'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className='font-semibold transition-colors hover:text-purple-700'>{link.label}</a>
            </li>
          ))}

        </ul>
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}

        </button>
        <a href="#download-app" className="primary-btn hidden md:block">Download App</a>
      </div>
    </header>
  )
}

export default header
