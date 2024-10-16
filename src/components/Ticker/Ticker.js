import './Ticker.css'
import data from "../../static/data";


let {img, title} = data.resources.ticker

export default function Ticker() {

    return <div className="ticker">
        <div className="scroll">
            <div className="scroll-item">
                {Array(30).fill(1).map((e, index) => <div key={index}>
                    <img className="scroll-item-icon" src={img} alt="steam"/><span>{title}</span>
                </div>)}
                <span></span>
            </div>
            <div className="scroll-item">
                {Array(30).fill(1).map((e, index) => <div key={index}>
                    <img className="scroll-item-icon" src={img} alt="steam"/><span>{title}</span>
                </div>)}
                <span></span>
            </div>
        </div>
    </div>
}