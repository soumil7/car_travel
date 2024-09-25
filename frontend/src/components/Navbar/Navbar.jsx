import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navBar">
      <ul className="navList">
        <Link to='/' className="navLink"><li className="navItem">Home</li></Link>
        <Link to='/destinations' className="navLink"><li className="navItem">Destinations</li></Link>
        <Link to='/bookingform' className="navLink"><li className="navItem">Booking Form</li></Link>
        <Link to='/contact' className="navLink"><li className="navItem">Contact</li></Link>
        <Link to='/footer' className="navLink"><li className="navItem">About</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
