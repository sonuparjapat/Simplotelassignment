import React from 'react';
import './Homepage.css';
import bodyimg from "../Images/body.jpg"

function Homepage() {
  return (
    <>
    <div className="image-with-text">
      <div className="image-container">
        <img src={bodyimg}  className='image' alt="bodyimg" />
      </div>
      <div className="text-container" >
        <div className="text">
          <h1 >LOREM IPSUM</h1>
          <p>Lorem Ipsum has been the industry's standard dummy
text ever since the 1500s, when an unknown printer took
</p>
        </div>
      </div>
    </div>
    <div >

    </div>
    
    </>
  );
}

export default Homepage;
