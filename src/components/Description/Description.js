import React from 'react';
import './Description.css';
import data from "../../static/data";
import DescriptionBack from "./DescriptionBack";
import useDimensions from "../../hooks/useDimensions";

let {card: {MainText, benefits}, sponsors} = data.description

export default function Description({descRef}) {
    const [descrRef, descDems] = useDimensions()

    return <div ref={descRef} className="description">
        <DescriptionBack descDems={descDems}/>
        <div ref={descrRef} className="description-card">
            <MainText/>
            <div className="description-card-benefits">
                {benefits.map(({title, text}) => <div key={title} className="description-card-benefit">
                    <div className="description-card-benefit-title">
                        {title}
                    </div>
                    <div className="description-card-benefit-text">
                        {text}
                    </div>
                </div>)}
            </div>
        </div>
        <div className="description-sponsors">
            {sponsors.map((s, index) => <img key={index} src={s} alt=""/>)}
        </div>

    </div>
}
