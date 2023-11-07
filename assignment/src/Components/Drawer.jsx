import React from 'react';
import './Drawer.css';

function Drawer({ isOpen, onClose, items }) {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default Drawer;
