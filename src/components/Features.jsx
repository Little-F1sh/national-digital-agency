import React from 'react';
// import featureimage from '../images/Frame-19.png';

function Features() {
  return (
    
    <div id='features'>
        
        <div className="features-model">
            {/* <img src={featureimage} alt="feature-image" /> */}
        </div>
        <div className="features-text">
            <h2>Features</h2>
            <h3>Lorem, ipsum dolor.<span>Lorem.</span> Lorem, ipsum.</h3>
            <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae nesciunt doloribus odit eligendi nulla doloremque deserunt blanditiis molestiae, harum atque aliquid molestias cupiditate tempora, sapiente voluptate labore expedita commodi repellendus omnis repudiandae nostrum pariatur enim perferendis. Atque, repudiandae quod?</p>
            <button>View More Features</button>
        </div>
    </div>
  )
}

export default Features;