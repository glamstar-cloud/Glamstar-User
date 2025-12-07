import React, { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../../Assets/Logo.png'
import Dp from '../../../Assets/Chats/Chats1.png'
import Hamburger from '../../../Icons/hamburger-menu.svg'
import X from '../../../Icons/X.png'
import NotifcationIcon from '../../../Icons/icons8-notification-32.png'

export default function UserNavbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const activeClass = "text-red-800 font-semibold underline underline-offset-4"
  const inactiveClass = "hover:text-red-700"

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpenMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <nav className="flex justify-between p-3 shadow bg-white fixed w-full z-50 top-7">
        <Link to="/home" className="w-25 sm:w-35 xl:45 my-auto">
          <img src={Logo} alt="Glamstar Beauty World" />
        </Link>

        {/* Desktop Links */}
        <div className="gap-3 lg:gap-4 items-center font-inter hidden md:flex">
          <NavLink to="/home" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>Services</NavLink>
          <NavLink to="/active-services" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>Active Services</NavLink>
          <NavLink to="/completed-bookings" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>Completed Bookings</NavLink>
          <NavLink to="/chats" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>Chats</NavLink>
        </div>

        <Link to='/notification' className='fixed right-15 top-11 md:right-17 md:top-13'>
          <img src={NotifcationIcon} alt='Notifications' className='w-6 h-6' />
        </Link>

        <Link to='/profile' className='relative'>
          <img src={Dp} alt='Avatar' className='w-12 h-12 rounded-full hidden md:block' />
          <span className='absolute bottom-0 right-0 md:block w-4 h-4 bg-green-500 border-2 border-white rounded-full hidden'></span>
        </Link>

        <button
          ref={buttonRef}
          className='cursor-pointer md:hidden'
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <img src={X} alt='Menu Close' className='w-8 h-8' /> : <img src={Hamburger} alt='Menu Open' />}
        </button>


        {/* Mobile Menu */}
{openMenu && (
  <div
    ref={menuRef}
    className="font-inter absolute w-4xs right-0 top-13 flex flex-col bg-white px-3 rounded-b-md sm:text-lg md:hidden divide-y divide-gray-200"
  >
    <Link
      to='/profile'
      className='flex items-center gap-3 py-5'
      onClick={() => setOpenMenu(false)}
    >
      <div className='relative'>
        <img src={Dp} alt='Avatar' className='w-12 h-12 rounded-full' />
        <span className='absolute bottom-0 right-0 block w-4 h-4 bg-green-500 border-2 border-white rounded-full'></span>
      </div>
      My Account
    </Link>

    <NavLink
      to="/services"
      className={({ isActive }) => `py-5 ${isActive ? activeClass : inactiveClass}`}
      onClick={() => setOpenMenu(false)}
    >
      Services
    </NavLink>

    <NavLink
      to="/active-services"
      className={({ isActive }) => `py-5 ${isActive ? activeClass : inactiveClass}`}
      onClick={() => setOpenMenu(false)}
    >
      Active Services
    </NavLink>

    <NavLink
      to="/completed-bookings"
      className={({ isActive }) => `py-5 ${isActive ? activeClass : inactiveClass}`}
      onClick={() => setOpenMenu(false)}
    >
      Completed Bookings
    </NavLink>

    <NavLink
      to="/chats"
      className={({ isActive }) => `py-5 ${isActive ? activeClass : inactiveClass}`}
      onClick={() => setOpenMenu(false)}
    >
      Chats
    </NavLink>
  </div>
)}

      </nav>
    </>
  )
}
