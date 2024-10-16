import React from 'react';
import './Resources.css';
import data from "../../static/data";
import Ticker from "../Ticker/Ticker";
import useDimensions from "../../hooks/useDimensions";
import ResourcesBack from "./ResourcesBack";

let {title} = data.resources

export default function Resources() {
    const [textRef, textDems] = useDimensions()

    return <div className="resources">
        <ResourcesBack textDems={textDems}/>
        <Ticker/>
        <div ref={textRef} className="resources-title">
            {title}
        </div>
    </div>
}
