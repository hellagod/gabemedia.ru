import React, {useEffect, useRef, useState} from 'react';
import './Hello.css';
import data from "../../static/data";
import HelloBack from "./HelloBack";
import useDimensions from "../../hooks/useDimensions";

let {
    commonIcons: {ArrowRightUp},
    hello: {forHwo, MainText, button, AboutText}
} = data


export default function Hello({helloRef}) {
    const [textRef, textDems] = useDimensions()
    const [footerRef, footerDems] = useDimensions()
    const [aboutRef, aboutDems] = useDimensions()

    return <div ref={helloRef} className="hello">
        <HelloBack textDems={textDems} footerDems={footerDems} aboutDems={aboutDems}/>

        <MainText innerRef={textRef}/>
        <div className="hello-for">
            {forHwo.map(
                v => <div key={v} className="hello-for-item">{v}</div>
                    )}
                </div>
                <div className="hello-footer" ref={footerRef}>
            <AboutText innerRef={aboutRef}/>
            <div onClick={()=>button.scroll()} className="hello-button">
                <div className="header-button-name">
                    {button.name}
                </div>
                <div className="hello-button-icon">
                    <ArrowRightUp className="hello-button-icon-arrow"/>
                </div>
            </div>
        </div>
    </div>
}
