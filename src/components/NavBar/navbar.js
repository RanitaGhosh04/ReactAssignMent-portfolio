import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import navBarLogo from '../../assets/navBarLogo.png'
import navChat from '../../assets/navChat.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={navBarLogo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={navChat} alt='btnimg' className='desktopMenuImg'/>Contact Me
        </button>
    </nav>
  )
}

export default Navbar