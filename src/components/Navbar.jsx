import React from "react";

function Navbar(){
    return(
        <div className='page'>
      <div className="container">
        <a href="" className='logo'>Forest <span>.</span></a>
        <ul className="items">
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Contact us</a></li>
        </ul>
        <div className="arc">
          <div className="arc2">
            <div className="arc3"></div>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="content">
          <h2>Start Your Day With A Sight <br /> of Fresh Air</h2>
          <p>Forests are popular and beloved for 
            their misty and beautiful <br />views around the world.
            Awaken your artistic eye with a short <br />view every morning.</p>
        </div>
        <button>
          View More
        </button>
      </div>
    </div>
    )
}

export default Navbar;