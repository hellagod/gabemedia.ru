import React, {useEffect, useState} from 'react';
import './Offer.css';
import data from "../../static/data";
import OfferBack from "./OfferBack";
import useDimensions from "../../hooks/useDimensions";
import useScreenSize from "../../hooks/useScreenSize";

let {offer: {title, toggle: {bloggers, brands}}, commonIcons: {ArrowRightUp}} = data

export default function Offer({offerRef, isBlogger, setIsBlogger}) {

    const [obj, setObj] = useState(brands)
    const [colorChange, setColorChange] = useState(false)
    const [offRef, offerDems] = useDimensions()
    const {isMobile} = useScreenSize()

    useEffect(() => {
        setColorChange(true)
        setTimeout(() => {
            setObj(isBlogger ? bloggers : brands)
            setColorChange(false)
        }, 250)
    }, [isBlogger])

    return <div ref={offerRef} className="offer">
        <div className="offer-card">
            <OfferBack offerDems={offerDems}/>
            <div className="offer-title">
                {title}
            </div>
            <div className="offer-toggle">
                <div className={`offer-toggle-button ${isBlogger ? 'offer-toggle-active' : 'offer-toggle-inactive'}`}
                     onClick={() => setIsBlogger(true)}
                >
                    <div className="offer-toggle-button-name">
                        {bloggers.name}
                    </div>
                    <div className="offer-toggle-button-icon">
                        <ArrowRightUp />
                    </div>
                </div>
                <div className={`offer-toggle-button ${!isBlogger ? 'offer-toggle-active' : 'offer-toggle-inactive'}`}
                     onClick={() => setIsBlogger(false)}
                >
                    <div className="offer-toggle-button-name">
                        {brands.name}
                    </div>
                    <div className="offer-toggle-button-icon">
                        <ArrowRightUp/>
                    </div>
                </div>
            </div>
            <div ref={offRef} className={`offer-text ${colorChange ? 'invisible-font' : 'visible-font'}`}>
                {obj.text}
            </div>
            <div className={`offer-services ${isBlogger ? 'bloggers' : 'brands'} ${colorChange ? 'invisible-font' : 'visible-font'}`}>
                {(isMobile? obj.servicesSmall : obj.services).map((c, index1) => <div key={index1} className="offer-services-row">
                    {c.map((v, index2) => <div
                        key={index2}
                        id={index1+'item'+index2}
                        className="offer-services-row-item">
                        {v}
                    </div>)}
                </div>)}
            </div>

        </div>

    </div>
}
