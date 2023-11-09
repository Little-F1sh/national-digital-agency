import React from 'react';
import {Link} from 'react-scroll';
import logoimage from '../images/logo2.png';

function navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to='main' className='logo1'>
            <img src={logoimage} alt="" />
            <h6>National</h6>
          </Link>
          <h6 className='logo2'>Digital Agency</h6>
        </div>
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