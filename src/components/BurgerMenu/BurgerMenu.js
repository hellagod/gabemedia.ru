import React from 'react';
import './BurgerMenu.css';

export default function BurgerMenu({isOpen,setIsOpen}) {
    return <div className="burger-menu">
        <input type="checkbox"
               id="burger-checkbox"
               checked={isOpen}
               className="burger-checkbox"
               onChange={e => setIsOpen(e.target.checked)}
        />
        <label className="burger" htmlFor="burger-checkbox"/>
    </div>
}
