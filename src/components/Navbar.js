import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../logo.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
    <div className='nav-center'>
    <Link to="/">
    <img src={logo} alt='cocktail db logo' className='logo'/>
    </Link>
    <ul>
      <li>
        <Link to='/'>home</Link>
      </li>
      <li>
        <Link to='/about'>about</Link>
      </li>
    </ul>
    </div>
    </nav>
  )
}