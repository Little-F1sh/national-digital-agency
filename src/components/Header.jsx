import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
      <Navbar/>
       <div className="name">
          <h2>Integrated Marketing Team</h2>
          <h1>Digital <span>Marketing...</span><br/> Amplified</h1>
          <p className='details'>For a great product or service that deserves to be center stage, it's time to turn up the volume on your digital marketing. let us help you win and reach more customers.</p>
          <div className="header-btns">
              <a href="#" className='cv-btn1'>GET A SERVICES</a>
          </div>
      </div>
    </div>
  )
}

export default Header;