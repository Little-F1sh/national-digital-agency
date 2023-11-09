import React from 'react';
import Sbox from './Sbox';
import image1 from '../images/s1.png'    
import image2 from '../images/s2.png'    

function Services() {
  return (
    <div id='services'>
        <div className='s-heading'>
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="b-container">
        <Sbox image={image1} alte='image1' button='lorem'/>
        <Sbox image={image2} alte='image2' button='lorem'/>
        <Sbox image={image1} alte='image1' button='lorem'/>
        
      </div>
      <div className="b-container">
        <Sbox image={image2} alte='image2' button='lorem'/>
        <Sbox image={image1} alte='image1' button='lorem'/>
        <Sbox image={image2} alte='image2' button='lorem'/>
      </div>
    </div>
  )
}

export default Services;