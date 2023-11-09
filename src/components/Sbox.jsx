import React from 'react'

function Sbox(props) {
  return (
    <div className='s-box'>
    <div className="s-b-img">
      <img src={props.image} alt={props.alte} />
    </div>
    <div className="s-b-text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora quaerat corporis dicta error eligendi, voluptates libero sapiente delectus aut?</p>
      <a href="#" className='cv-btn'>{props.button}</a>
    </div>
  </div>
  )
}

export default Sbox