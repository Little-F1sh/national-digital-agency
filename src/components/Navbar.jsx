import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/Logo1.png';

function navbar() {
  return (
    <div>
      <nav>
        <Link to='main' className='logo' smooth={true} Duration={2000}>
          <img src={logo} alt="logo"/>
        </Link>
        <input className='menu-btn' type="checkbox" id='menu-btn' />
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li><Link to='main' className='active' smooth={true} Duration={2000}>Home</Link></li>
          <li><Link to='features' smooth={true} Duration={2000} >Features</Link></li>
          <li><Link to='services' smooth={true} Duration={2000} >Services</Link></li>
          <li><Link to='subscribe' smooth={true} Duration={2000} >Subscribe</Link></li>
          <li><Link to='contact' smooth={true} Duration={2000} >Contact</Link></li>
        </ul>
        
      </nav>
    </div>
  )
}

export default navbar;