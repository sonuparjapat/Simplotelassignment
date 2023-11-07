import React from 'react';
import './CardsSection.css';
import burger from "../../Images/burger.jpg"
import pizza from "../../Images/pizza.jpg"
import pasta from "../../Images/pasta.jpg"
function CardsSection() {
  return (
    <div className="cards-section">
      <h1 >Order Now</h1>
      <div className="cards">
        <div className="card">
          <img src={burger}  alt="Image 1" />
          <h2 style={{lineHeight:"4px"}}>Burger</h2>
          <p  > Lorem Ipsum has been the
industry's standard dummy text</p>
        </div>
        <div className="card">
          <img src={pizza}  alt="Image 2" />
          <h2 style={{lineHeight:"4px"}}>Pizza</h2>
          <p>Lorem Ipsum has been the
industry's standard dummy text</p>
        </div>
        <div className="card">
          <img src={pasta} alt="Image 3" />
          <h2 style={{lineHeight:"4px"}}>Pasta</h2>
          <p>Lorem Ipsum has been the
industry's standard dummy text</p>
        </div>
      </div>
      <button className="order-all-button"><h2>Order</h2></button>
    </div>
  );
}

export default CardsSection;
