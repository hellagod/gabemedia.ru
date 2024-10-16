import React from 'react';
import './WorkStyle.css';
import data from "../../static/data";


let {title, steps} = data.workStyle

export default function WorkStyle() {
    return <div className="work-style">
        <div className="work-style-card">
            <div className="work-style-title">
                {title}
            </div>
            <div className="work-style-steps">
                {steps.map(({id, title, text}, index) => (
                    <div key={index} className={!id ? "border-line" : "work-style-step"}>
                        {id ? [<div key={1} className="work-style-step-id">{id}</div>,
                            <div key={2} className="work-style-step-text">
                                <div>{title}</div>
                                <div>{text}</div>
                            </div>] : ""}
                    </div>
                ))}
            </div>
        </div>
    </div>
}
