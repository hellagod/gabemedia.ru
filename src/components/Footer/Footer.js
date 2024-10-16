import React from 'react';
import './Footer.css';
import data from "../../static/data";
import FooterBack from "./FooterBack";

let {footer: {politic, logo, menu, copyR}, commonIcons: {TelegramIcon, VKIcon}} = data

export default function Footer() {
    return <div className="footer">
        <FooterBack/>
        <div className="footer-up">
            <div className="footer-up-logo">
                <img src={logo.img} alt='gabe'/>
                <div>{logo.name}</div>
            </div>
            <div className="footer-up-menu">
                {menu.map(m => <div key={m.name} onClick={() => {
                    m.scroll()
                }}>
                    {m.name}
                </div>)}
                <div className="footer-up-menu-icons">
                    <div><TelegramIcon/></div>
                    <div><VKIcon/></div>
                </div>
            </div>
        </div>
        <div className="footer-down">
            <div className="footer-down-politics">
                <div>
                    {politic.name}
                </div>
                <div>
                    {politic.email}
                </div>
            </div>
            <div className="footer-down-copyr">
                {copyR}
            </div>
        </div>
    </div>
}
