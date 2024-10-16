import './Header.css'
import data from '../../static/data'

let {menu, button, logo} = data.header


export default function Header() {
    return <div className="header">
        <div className="header-menu">
            {menu.map(mi => <div key={mi.name} onClick={() => mi.scroll()} className="header-menu-item">
                {mi.name}
            </div>)}
        </div>
        <div className="header-logo">
            <img src={logo.img} className="header-logo-icon" alt={logo.name}/>
            <div className="header-logo-name">{logo.name}</div>
        </div>
        <div className="header-button-container">
            <div className="header-button">
                <div onClick={()=>button.scroll()} className="header-button-name">
                    {button.name}
                </div>
                <button.Icon className="header-button-icon"/>
            </div>
        </div>
    </div>
}