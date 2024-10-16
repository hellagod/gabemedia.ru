import React, {useEffect, useState} from "react";
import useScreenSize from "../../hooks/useScreenSize";

export default function FeedbackBack({}) {
    const [styles, setStyles] = useState({})
    const {isMobile} = useScreenSize();

    useEffect(() => {
        setStyles({
            lineTop: {
                top: '218px',
                height: isMobile ? "180px" : "450px",
                width: '100%'
            },
            lineBottom: {
                top: '297px',
                height: isMobile ? "180px" : '486px',
                width: '100%'
            },
            cross: {
                top: isMobile ? '400px' : "580px",
                left: isMobile ? '6%' : '14%'
            },
            crossSmall: {
                top: isMobile ? '333px' : '513px',
                left: isMobile ? '30%' : '38%'
            }
        })
    }, [isMobile])

    return [
        <svg xmlns="http://www.w3.org/2000/svg"
             style={styles.lineTop}
             key="line-top"
             preserveAspectRatio="none"
             viewBox="0 0 1280 467" fill="none">
            <path vectorEffect="non-scaling-stroke"
                  d="M1303.66 430.762C1228.16 318.417 1194.1 352.622 1135.16 430.761C1100.83 476.261 1056.14 488.415 994.158 395.761C950.5 330.5 860.938 356.344 830.657 395.761C772.658 471.261 684.657 423.261 639.157 363.261C593.657 303.261 527.882 228.377 417.657 259.761C339.616 281.982 283.711 358.087 131.157 318.417C-21.398 278.747 -95.3433 159.261 -81.2056 1.01566"
                  stroke="#8420E8" strokeWidth="2"/>
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg"
             style={styles.lineBottom}
             key="line-bottom"
             preserveAspectRatio="none"
             viewBox="0 0 1280 505" fill="none">
            <path vectorEffect="non-scaling-stroke"
                  d="M1444.9 299.579C1356.43 187.076 1210.85 324.485 1168.74 415.355C1122.78 514.514 948.678 534.707 866.699 453.561C816.424 403.797 753.669 332.859 642.156 381.925C543.357 425.396 479.482 444.878 404.86 360.744C330.238 276.61 300.237 222.172 171.478 253.33C80.3148 275.39 0.667737 420.463 -177.71 380.477C-356.087 340.492 -388.698 159.085 -372.502 0.864051"
                  stroke="#CCF304" strokeWidth="2"/>
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg"
             width="112" height="112"
             style={styles.cross}
             key="cross"
             viewBox="0 0 112 112" fill="none">
            <path d="M50.6832 33.836L69.411 1.3984L96.225 16.8794L77.4971 49.317L76.9971 50.1831L77.8631 50.6831L110.301 69.4109L94.8197 96.2249L62.3821 77.497L61.5161 76.997L61.0161 77.863L42.2882 110.301L15.4743 94.8196L34.2021 62.382L34.7021 61.516L33.8361 61.016L1.3985 42.2881L16.8795 15.4742L49.3171 34.202L50.1832 34.702L50.6832 33.836Z"
                  stroke="#CCF304" strokeOpacity="0.8" strokeWidth="2"/>
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg"
             width="42" height="39"
             style={styles.crossSmall}
             key="cross-small"
             viewBox="0 0 42 39" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.96717 0.734005L0.21309 9.48808L10.4262 19.7012L0.21309 29.9143L8.96717 38.6683L19.1803 28.4553L29.3933 38.6683L38.1474 29.9143L27.9343 19.7012L38.1474 9.48808L29.3933 0.734004L19.1803 10.9471L8.96717 0.734005ZM13.468 19.7012L3.2549 29.9143L12.009 38.6684L22.2221 28.4553L32.4352 38.6684L41.1892 29.9143L30.9761 19.7012L41.1892 9.4881L32.4352 0.734022L22.2221 10.9471L12.009 0.734022L3.2549 9.4881L13.468 19.7012ZM4.35137 9.4881L14.5645 19.7012L4.35137 29.9143L12.009 37.5719L22.2221 27.3588L32.4352 37.5719L40.0928 29.9143L29.8797 19.7012L40.0928 9.4881L32.4352 1.83049L22.2221 12.0436L12.009 1.83049L4.35137 9.4881Z"
                  fill="#CCF304" fillOpacity="0.7"/>
        </svg>
    ]
}