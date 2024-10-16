import React from 'react';
import './SideMenu.css';
import data from "../../static/data";
import useScreenSize from "../../hooks/useScreenSize";

let {header: {menu, button, logo}, commonIcons: {TelegramIcon, VKIcon}} = data

export default function SideMenu({isOpen, setIsOpen}) {
    const {height} = useScreenSize()
    return <div className={`side-menu ${isOpen ? 'open' : 'close'}`}>
        <div className="side-menu-up">
            <div className="header-logo">
                <img src={logo.img} className="header-logo-icon" alt={logo.name}/>
                <div className="header-logo-name">{logo.name}</div>
            </div>
            <div className="header-menu">
                {menu.map(mi => <div key={mi.name} onClick={()=> {
                    setIsOpen(false)
                    mi.scroll()
                }} className="header-menu-item">
                    {mi.name}
                </div>)}
            </div>
            {/*<div className="side-menu-icons">*/}
            {/*    <div className="side-menu-icon">*/}
            {/*        <TelegramIcon/>*/}
            {/*    </div>*/}
            {/*    <div className="side-menu-icon">*/}
            {/*        <VKIcon/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
        <div className="header-button" style={{top: `${height-92}px` }}>
            <div onClick={()=>button.scroll()} className="header-button-name">
                {button.name}
            </div>
            <button.Icon className="header-button-icon"/>
        </div>
    </div>
}
