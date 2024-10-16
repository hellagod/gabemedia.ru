import React, {useState} from 'react';
import './Special.css';
import data from "../../static/data";
import SpecialBack from "./SpecialBack";
import useDimensions from "../../hooks/useDimensions";


let {title, cards} = data.special

export default function Special() {
    const [specRef, specDems] = useDimensions()
    const [titleRef, titleDems] = useDimensions()
    const [mask, setMask] = useState([0, 0, 1, 0])

    return <div className="special">
        <SpecialBack specDems={specDems} titleDems={titleDems}/>
        <div className="special-card">
            <div ref={titleRef} className="special-title">
                {title}
            </div>
            <div ref={specRef} className="special-cards">
                {cards.map(({id, title, text}, index) => <div
                    key={id}
                    onMouseEnter={() => {
                        let newMask = [0,0,0,0]
                        newMask[index] = 1
                        setMask(newMask)
                    }}
                    className={`special-card-body ${mask[index] ? 'hovered' : ''}`}
                >
                    <div className="special-card-header">
                        <div className="special-card-header-title">
                            {title}
                        </div>
                        <div className="special-card-header-id">
                            {id}
                        </div>
                    </div>
                    <div className="special-card-text">
                        {text}
                    </div>
                </div>)}
            </div>
        </div>
    </div>
}
