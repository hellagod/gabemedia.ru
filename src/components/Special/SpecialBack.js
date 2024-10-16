import React, {useEffect, useState} from "react";
import useScreenSize from "../../hooks/useScreenSize";

export default function SpecialBack({specDems, titleDems}) {
    const [styles, setStyles] = useState({})
    const {isMobile} = useScreenSize();

    useEffect(() => {
        setStyles({
            right: {
                top: `${titleDems.y + (titleDems.height + (isMobile ? -44 : -80)) / 2}px`,
                left: `${titleDems.x + titleDems.width + (isMobile ? 10 : 84)}px`,
                width: isMobile ? '80px' : '145px'
            },
            left: {
                top: `${titleDems.y + (titleDems.height + (isMobile ? -44 : -80)) / 2}px`,
                left: `${titleDems.x + (isMobile ? -85 : -84 - 145)}px`,
                width: isMobile ? '80px' : '145px'
            },
            leftUp: {
                left: `${isMobile ? -160 : 0}px`,
                top: `${specDems.y + specDems.height / 2 - 227 / 2}px`,
                width: isMobile ? '475px' : '760px'
            },
            rightDown: {
                right: `${isMobile ? -180 : 0}px`,
                bottom: `${-227 / 4}px`,
                width: isMobile ? '475px' : '760px'
            },
        })
    }, [isMobile, specDems.height, specDems.y, titleDems.height, titleDems.width, titleDems.x, titleDems.y])

    return [
        <div className="blick" key="blick" style={styles.blick}/>,
        <svg xmlns="http://www.w3.org/2000/svg"
             key="right-up"
             style={styles.leftUp}
             width="663" height="227" viewBox="0 0 663 227" fill="none">
            <path d="M-56 1.73304L137.365 113.5L-56 225.267L-56 1.73304ZM205.818 1.73304L399.184 113.5L205.818 225.267V1.73304ZM467.636 1.73304L661.002 113.5L467.636 225.267V1.73304Z" stroke="white"
                  strokeOpacity="0.8" strokeWidth="2"/>
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg"
             key="right-down"
             style={styles.rightDown}
             width="663" height="227" viewBox="0 0 663 227" fill="none">
            <path d="M1.00001 1.73304L194.365 113.5L1 225.267L1.00001 1.73304ZM262.818 1.73304L456.184 113.5L262.818 225.267V1.73304ZM524.636 1.73304L718.002 113.5L524.636 225.267V1.73304Z"
                  stroke="white" strokeOpacity="0.8" strokeWidth="2"/>

        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg"
             key="left"
             style={styles.left}
             viewBox="0 0 145 80" fill="none">
            <path d="M0 80L30.1887 80L55 40L30.1887 6.98197e-06L0 5.66238e-06L24.8113 40L0 80Z" fill="#CCF304"/>
            <path d="M75.1887 80H45L69.8113 40L45 0L75.1887 1.31959e-06L100 40L75.1887 80Z" fill="#CCF304"/>
            <path d="M120.189 80H90L114.811 40L90 1.96701e-06L120.189 3.2866e-06L145 40L120.189 80Z" fill="#CCF304"/>
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg"
             key="right"
             style={styles.right}
             viewBox="0 0 145 80" fill="none">
            <path d="M0 80L30.1887 80L55 40L30.1887 6.98197e-06L0 5.66238e-06L24.8113 40L0 80Z" fill="#CCF304"/>
            <path d="M75.1887 80H45L69.8113 40L45 0L75.1887 1.31959e-06L100 40L75.1887 80Z" fill="#CCF304"/>
            <path d="M120.189 80H90L114.811 40L90 1.96701e-06L120.189 3.2866e-06L145 40L120.189 80Z" fill="#CCF304"/>
        </svg>
    ]
}