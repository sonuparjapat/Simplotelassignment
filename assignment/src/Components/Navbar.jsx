import React, { useState } from 'react';
import "./Navbar.css"
import { FaBars } from 'react-icons/fa'; 
import Drawer from './Drawer';
function Navbar() {
  const [drawersystem,setDrawersystem]=useState(false)
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const menuItems = [
    { link: '#home', text: 'Home' },
    { link: '#order', text: 'Order' },
    { link: '#food', text: 'Food' },
    { link: '#restaurant', text: 'Restaurant' },
    { link: '#testimonials', text: 'Testimonials' },
    { link: '#contact', text: 'Contact Us' },
  ];
  return (
    <nav className="navbar">
      <div className="container">
        <div className='general'></div>
        <div className='menu' onClick={toggleDrawer}  >
          <FaBars />
          
       
        </div>
        <div style={{display:"flex"}}>
        <div className="nav-menu">
       
          <ul>
           
            <li><a href="#home">Home</a></li>
            <li><a href="#order">Order</a></li>
            <li><a href="#food">Food</a></li>
            
          </ul>
          
        </div>
        <div className='nav-menu2'> <ul><li><a href="#restaurant">Restaurant</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li></ul></div>
        
        
        </div>
        
        <div className="icons">
          <a href="tel:your-phone-number"><i className="fas fa-phone"></i></a>
          <a href="#"><i className="fas fa-shopping-cart"></i></a>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} items={menuItems.slice(3)} />
    </nav>
  );
}
export default Navbar